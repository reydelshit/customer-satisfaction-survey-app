'use client';

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

export default function PositiveRate() {
  const [totalSurvey, setTotalSurvey] = useState(0);
  const [totalPositive, setTotalPositive] = useState(0);

  async function fetchTotalSurvey() {
    const totalSurvey = await getAllSurvey();
    if (totalSurvey) {
      setTotalSurvey(totalSurvey.length);

      const totalPositiveResponse = totalSurvey.filter(
        (survey) => survey.overallSatisfaction > 7,
      );
      setTotalPositive(totalPositiveResponse.length);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>Positive Responses Rate</CardTitle>
        <CardDescription>
          Threshold to be considred positive is greater than 7
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">
          {(totalPositive / totalSurvey) * 100}%
        </h1>
      </CardContent>
    </Card>
  );
}
