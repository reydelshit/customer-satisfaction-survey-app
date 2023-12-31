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
import { getAllSurvey } from '../../action/getTotalSurvey';
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

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

export default function LatestResponse() {
  const [latestResponse, setLatestResponse] = useState<Feedback[]>([]);

  async function fetchTotalSurvey() {
    try {
      const latestRes = await getAllSurvey();
      if (latestRes && latestRes.length > 0) {
        const sortedResponse = latestRes.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        setLatestResponse(sortedResponse);
      }
    } catch (error) {
      console.log('latest', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <div className="w-full md:w-[40%] md:p-8">
      <div className="flex justify-between mb-2">
        <h1 className="font-bold mb-2 uppercase">Latest Responses</h1>
        <Label>Only shows 10</Label>
      </div>

      {latestResponse.length > 0 ? (
        <Table className="w-full self-end">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Feedback</TableHead>

              <TableHead className="text-right">Overall Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestResponse &&
              latestResponse.slice(0, 10).map((survey) => (
                <TableRow key={survey.id}>
                  <TableCell>{survey.product}</TableCell>
                  <TableCell>{survey.feedbackMessage}</TableCell>

                  <TableCell className="text-right">
                    {survey.overallSatisfaction}/10
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex items-center space-x-4 w-full">
          <div className="h-[30rem] grid place-items-center place-content-center w-full">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </div>
  );
}
