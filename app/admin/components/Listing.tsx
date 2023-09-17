'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { getAllSurvey } from '../action/getTotalSurvey';
import { useState, useEffect } from 'react';

import Analyze from './components/Analyze';
import ViewDetails from './components/ViewDetails';

interface Feedback {
  id: number;
  name: string;
  product: string;
  overallSatisfaction: number;
  foodQualityRate: number;
  foodQualityQ1?: string | null;
  foodQualityQ2?: string | null;
  serviceExperience: number;
  serviceExperienceQ1?: string | null;
  recommendation: boolean;
  recommendationQ1?: string | null;
  LFO: number;
  LFOQ1?: string | null;
  LFOQ2?: string | null;
  LFOQ3?: string | null;
  feedbackMessage?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function Listing() {
  const [latestResponse, setLatestResponse] = useState<Feedback[]>([]);
  const [holdTheId, setHoldTheId] = useState<number>(0);
  const [decider, setDecider] = useState<boolean>(false);
  const [analyzeDecider, setAnalyzeDecider] = useState<boolean>(false);
  const [rating, setRating] = useState({
    overallSatisfaction: 0,
    foodQualityRate: 0,
    serviceExperience: 0,
  });

  const [showLoadingContent, setShowLoadingContent] = useState(false);

  async function fetchTotalSurvey() {
    try {
      const latestRes = await getAllSurvey();
      if (latestRes) {
        setLatestResponse(latestRes);
      }
    } catch (error) {
      console.error('listing', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  const handleViewDetails = (id: number) => {
    setHoldTheId(id);
    setDecider(true);
    setAnalyzeDecider(false);
  };

  const callGpt = async () => {
    latestResponse
      .filter((survey) => survey.id === holdTheId)
      .map((survey) => {
        setRating({
          overallSatisfaction: survey.overallSatisfaction,
          foodQualityRate: survey.foodQualityRate,
          serviceExperience: survey.serviceExperience,
        });
      });

    console.log(
      rating.overallSatisfaction,
      rating.foodQualityRate,
      rating.serviceExperience,
    );
  };

  const handleAnalyzeGpt = () => {
    setAnalyzeDecider(true);
    setShowLoadingContent(true);
    const delay = 5000;
    setTimeout(() => {
      setShowLoadingContent(false);
      callGpt();
    }, delay);
  };
  return (
    <div className="flex flex-row p-8 justify-between gap-10">
      <div className="w-[30%]">
        <Table className="w-full self-end border-2">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>

              <TableHead>Product</TableHead>
              <TableHead>Feedback</TableHead>

              <TableHead className="text-right">Overall Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestResponse &&
              latestResponse.map((survey) => (
                <TableRow
                  key={survey.id}
                  onClick={() => handleViewDetails(survey.id)}
                  className="cursor-pointer"
                >
                  <TableCell>{survey.id}</TableCell>

                  <TableCell>{survey.product}</TableCell>
                  <TableCell>{survey.feedbackMessage?.slice(0, 50)}</TableCell>

                  <TableCell className="text-right">
                    {survey.overallSatisfaction}/10
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {decider && (
        <div className="w-[80%]">
          {latestResponse &&
            latestResponse
              .filter((survey) => survey.id === holdTheId)
              .map((survey) => (
                <div key={survey.id} className="flex flex-col p-2">
                  <h1 className="text-center font-bold text-2xl my-4">
                    Respondent Number {survey.id}
                  </h1>

                  <div className="mb-10 mr-10 self-end">
                    <Button
                      onClick={handleAnalyzeGpt}
                      className="w-[8rem] mr-2"
                    >
                      Analyze
                    </Button>
                    <Button className="w-[8rem]">Export</Button>
                  </div>

                  {analyzeDecider && (
                    <div className="  flex justify-center h-full w-full border-2 mb-4 rounded-md">
                      {showLoadingContent ? (
                        <div className="h-[15rem] flex flex-col justify-center items-center text-center">
                          <div className="spinner"></div>
                          <span className="mt-[2rem]">analyzing</span>
                        </div>
                      ) : (
                        <div className="px-16 h-full py-10 flex justify-center flex-col">
                          <div className="flex justify-between w-full">
                            <h1 className="font-bold">Suggestions</h1>
                            <span className="font-semibold">
                              Ps. The analyzation is based on limited dataset,
                              expect not accurate suggestions
                            </span>
                          </div>

                          <div>
                            <Analyze
                              name="Overall Satisfaction"
                              rating={rating.overallSatisfaction}
                            />
                            <Analyze
                              name="Food Quality"
                              rating={rating.foodQualityRate}
                            />
                            <Analyze
                              name="Service Quality"
                              rating={rating.serviceExperience}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2 justify-center">
                    <Card className="w-[20rem]">
                      <CardHeader>
                        <CardTitle>Overall Satisfaction</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h1 className="text-3xl font-bold">
                          {survey.overallSatisfaction}
                        </h1>
                      </CardContent>
                    </Card>
                    <Card className="w-[20rem]">
                      <CardHeader>
                        <CardTitle>Food Quality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h1 className="text-3xl font-bold">
                          {survey.foodQualityRate}
                        </h1>
                      </CardContent>
                    </Card>
                    <Card className="w-[20rem]">
                      <CardHeader>
                        <CardTitle>Service Experience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h1 className="text-3xl font-bold">
                          {survey.serviceExperience}
                        </h1>
                      </CardContent>
                    </Card>
                  </div>

                  <ViewDetails survey={survey} />
                </div>
              ))}
        </div>
      )}
    </div>
  );
}
