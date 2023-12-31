'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAllSurvey } from '../../action/getTotalSurvey';
import { useState, useEffect } from 'react';

export default function PositiveRate() {
  const [totalSurvey, setTotalSurvey] = useState(0);
  const [totalPositive, setTotalPositive] = useState(0);

  async function fetchTotalSurvey() {
    try {
      const totalSurvey = await getAllSurvey();
      if (totalSurvey) {
        setTotalSurvey(totalSurvey.length);

        const totalPositiveResponse = totalSurvey.filter(
          (survey) => survey.overallSatisfaction > 7,
        );
        setTotalPositive(totalPositiveResponse.length);
      }
    } catch (error) {
      console.log('positive', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <Card className="w-full md:w-[25rem]">
      <CardHeader>
        <CardTitle>Positive Responses Rate</CardTitle>
        <CardDescription>
          Threshold to be considred positive is greater than 7
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">
          {totalPositive > 0 ? (
            (totalPositive / totalSurvey) * 100 + '%'
          ) : (
            <div className="flex items-center space-x-4 w-full p-2">
              <div className="grid place-items-start place-content-start w-full pl-5">
                <div className="spinner w-10"></div>
              </div>
            </div>
          )}
        </h1>
      </CardContent>
    </Card>
  );
}
