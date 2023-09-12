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
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

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

  async function fetchTotalSurvey() {
    try {
      const latestRes = await getAllSurvey();
      if (latestRes) {
        setLatestResponse(latestRes);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  const handleViewDetails = (id: number) => {
    setHoldTheId(id);
    setDecider(true);
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
            {latestResponse.slice(0, 10).map((survey) => (
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
          {latestResponse
            .filter((survey) => survey.id === holdTheId)
            .map((survey) => (
              <div key={survey.id} className="flex flex-col p-2">
                <h1 className="text-center font-bold text-2xl my-4">
                  Respondent Number {survey.id}
                </h1>
                <div className="flex gap-2 justify-center">
                  <Card className="w-[20rem]">
                    <CardHeader>
                      <CardTitle>Overall Satisfaction</CardTitle>
                      {/* <CardDescription>
                      Total response from customers
                    </CardDescription> */}
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

                {/* food quality  */}
                <div className="px-16">
                  <div className="mt-4">
                    <h1 className="mb-2">Food Quality:</h1>
                    <div>
                      <Label htmlFor="services">
                        How would you rate the taste and quality of the{' '}
                        <span className="font-bold">{survey.product}</span> ?
                      </Label>
                      <br />
                      <Label className="text-gray-400 ml-2" htmlFor="services">
                        (1 = Very Poor, 5 = Average, 10 = Excellent)
                      </Label>

                      <Input
                        type="number"
                        value={survey.foodQualityRate}
                        id="services"
                        placeholder="0"
                      />
                    </div>

                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        Were there any specific flavors, ingredients, or aspects
                        of the{' '}
                        <span className="font-bold">{survey.product}</span> that
                        you particularly liked or disliked? (Open-ended)
                      </Label>
                      <Input
                        value={survey.foodQualityQ1!}
                        id="quality1"
                        placeholder="Enter your answer here"
                      />
                    </div>

                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        Did the{' '}
                        <span className="font-bold">{survey.product}</span> meet
                        your expectations in terms of taste and presentation?
                      </Label>
                      <Input
                        value={survey.foodQualityQ2!}
                        id="quality1"
                        placeholder="Enter your answer here"
                      />
                    </div>
                  </div>

                  {/* service experience  */}

                  <div className="mt-4">
                    <h1 className="mb-2">Service Experience:</h1>
                    <div>
                      <Label htmlFor="services">
                        How would you rate the speed and efficiency of our food
                        service?
                      </Label>
                      <br />
                      <Label className="text-gray-400 ml-2" htmlFor="services">
                        (1 = Very Poor, 5 = Average, 10 = Excellent)
                      </Label>

                      <Input
                        value={survey.serviceExperience}
                        id="services"
                        placeholder="0"
                      />
                    </div>

                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        Were any special dietary requests or preferences (e.g.,
                        allergies, vegetarian, vegan) accommodated to your
                        satisfaction?
                      </Label>
                      <Input
                        value={survey.serviceExperienceQ1!}
                        id="quality1"
                        placeholder="Enter your answer here"
                      />
                    </div>
                  </div>

                  {/* recommendation  */}

                  <div className="mt-4">
                    <h1 className="mb-2">Recommendation:</h1>
                    <div>
                      <Label htmlFor="services">
                        Would you recommend the{' '}
                        <span className="font-bold">{survey.product}</span> to
                        others?
                      </Label>
                      <br />

                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={
                              survey.recommendation === true ? true : false
                            }
                          />
                          <Label htmlFor="recom">yes</Label>
                        </div>

                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={
                              survey.recommendation === false ? true : false
                            }
                          />
                          <Label htmlFor="recom">no</Label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        What improvements or changes to the{' '}
                        <span className="font-bold">{survey.product} </span>
                        would make you more likely to recommend it?
                      </Label>
                      <Input
                        value={survey.recommendationQ1!}
                        id="quality1"
                        placeholder="Enter your answer here"
                      />
                    </div>
                  </div>

                  {/* loyalty and future orders  */}

                  <div className="mt-4">
                    <h1 className="mb-2">Loyalty and Future Orders:</h1>
                    <div>
                      <Label htmlFor="services">
                        How likely are you to order the{' '}
                        <span className="font-bold">{survey.product}</span> from
                        us again in the future?
                      </Label>
                      <br />
                      <Label className="text-gray-400 ml-2" htmlFor="services">
                        (1 = Very Poor, 5 = Average, 10 = Excellent)
                      </Label>

                      <Input
                        type="number"
                        max={10}
                        value={survey.LFO}
                        id="services"
                        placeholder="0"
                      />
                    </div>

                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        If you are considering trying a different food service,
                        what would be the primary reason?
                      </Label>
                      <Input
                        value={survey.LFOQ1!}
                        id="quality1"
                        placeholder="Enter your answer here"
                      />
                    </div>
                    <div className="mt-2">
                      <Label htmlFor="quality1">
                        (Optional) Can you provide some basic demographic
                        information to help us better understand your feedback?
                        (e.g., age, gender)
                      </Label>
                      <Input
                        value={survey.LFOQ2!}
                        id="quality1"
                        placeholder="age"
                      />
                      <Input
                        value={survey.LFOQ3!}
                        className="mt-2"
                        id="quality1"
                        placeholder="gender"
                      />
                    </div>
                  </div>

                  {/* additional  */}
                  <div className="mt-4">
                    <h1 className="mb-2">Additional:</h1>
                    <div>
                      <Label htmlFor="services">
                        Is there anything else you'd like to share about your
                        experience with the{' '}
                        <span className="font-bold">{survey.product}</span> or
                        suggestions for improvement? (Open-ended)
                      </Label>
                      <br />
                      <Textarea
                        value={survey.feedbackMessage!}
                        className="mt-4"
                        placeholder="Type your feedback here."
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
