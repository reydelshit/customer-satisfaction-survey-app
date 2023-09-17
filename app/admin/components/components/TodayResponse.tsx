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

export default function TodayResponse() {
  const [totalSurvey, setTotalSurvey] = useState(0);

  async function fetchTotalSurvey() {
    try {
      const totalSurvey = await getAllSurvey();
      if (totalSurvey) {
        const currentDate = new Date().toISOString().slice(0, 10);

        const totalSurveyToday = totalSurvey.filter((survey) => {
          // Convert the createdAt date (which is a string) to a Date object
          const surveyDate = new Date(survey.createdAt)
            .toISOString()
            .slice(0, 10);
          return surveyDate === currentDate;
        });

        setTotalSurvey(totalSurveyToday.length);
      }
    } catch (error) {
      console.log('today', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>Today Responses</CardTitle>
        <CardDescription>Total responses for today</CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">{totalSurvey}</h1>
      </CardContent>
    </Card>
  );
}
