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
    <Card className="w-full md:w-[25rem]">
      <CardHeader>
        <CardTitle>Total Survey Submitted</CardTitle>
        <CardDescription>Total response from customers</CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">
          {totalSurvey && totalSurvey ? (
            totalSurvey
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
