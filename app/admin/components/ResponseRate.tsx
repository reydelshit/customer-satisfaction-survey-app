'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { getAllSurvey } from '../action/getTotalSurvey';

export default function ResponseRate() {
  const [totalSurvey, setTotalSurvey] = useState(0);
  const potentialRespondents = 100;

  async function fetchTotalSurvey() {
    try {
      const totalSurvey = await getAllSurvey();
      if (totalSurvey) {
        const total = totalSurvey.length;
        setTotalSurvey(total);
      }
    } catch (error) {
      console.log('response rate', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>Response Rate</CardTitle>
        <CardDescription>Based on potential respondents</CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">
          {(totalSurvey / potentialRespondents) * 100}%
        </h1>
      </CardContent>
    </Card>
  );
}
