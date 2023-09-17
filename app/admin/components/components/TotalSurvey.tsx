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
import { prisma } from '@/prisma/db';

export default function TotalSurvey() {
  const [totalSurvey, setTotalSurvey] = useState(0);

  async function fetchTotalSurvey() {
    try {
      const totalSurvey = await getAllSurvey();
      if (totalSurvey) {
        const total = totalSurvey.length;
        setTotalSurvey(total);
      }
    } catch (error) {
      console.log('total', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>Total Survey Submitted</CardTitle>
        <CardDescription>Total response from customers</CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">
          {totalSurvey && totalSurvey ? totalSurvey : 0}
        </h1>
      </CardContent>
    </Card>
  );
}