import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ViewDetails from './ViewDetails';
import Analyze from './Analyze';

export default function ListingViewDetails({
  decider,
  latestResponse,
  handleAnalyzeGpt,
  analyzeDecider,
  showLoadingContent,
  rating,
  holdTheId,
}: {
  decider: boolean;
  latestResponse: any[];
  handleAnalyzeGpt: () => void;
  analyzeDecider: boolean;
  showLoadingContent: boolean;
  rating: any;
  holdTheId: number;
}) {
  return (
    <>
      {decider && (
        <div className="w-full">
          {latestResponse &&
            latestResponse
              .filter((survey) => survey.id === holdTheId)
              .map((survey) => (
                <div key={survey.id} className="flex flex-col p-2">
                  <h1 className="text-center font-bold text-2xl my-4">
                    Respondent Number {survey.id}
                  </h1>

                  <div className="flex justify-center items-center w-full md:flex md:justify-end mb-5 md:mb-10 md:mr-10 md:self-end">
                    <Button
                      onClick={handleAnalyzeGpt}
                      className="w-[8rem] mr-2"
                    >
                      Analyze
                    </Button>
                    <Button onClick={() => window.print()} className="w-[8rem]">
                      Export
                    </Button>
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

                  <div className="flex flex-col md:flex-row gap-2 justify-center">
                    <Card className="w-full md:w-[20rem]">
                      <CardHeader>
                        <CardTitle>Overall Satisfaction</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h1 className="text-3xl font-bold">
                          {survey.overallSatisfaction}
                        </h1>
                      </CardContent>
                    </Card>
                    <Card className="w-full md:w-[20rem]">
                      <CardHeader>
                        <CardTitle>Food Quality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h1 className="text-3xl font-bold">
                          {survey.foodQualityRate}
                        </h1>
                      </CardContent>
                    </Card>
                    <Card className="w-full md:w-[20rem]">
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
    </>
  );
}
