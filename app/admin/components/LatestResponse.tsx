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
import { getAllSurvey } from '../action/getTotalSurvey';
import { useState, useEffect } from 'react';

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
    const latestRes = await getAllSurvey();
    if (latestRes) {
      setLatestResponse(latestRes);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <div className="w-[40%] p-8">
      <h1 className="font-bold mb-2">Latest Responses</h1>
      <Table className="w-full self-end border-2">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Feedback</TableHead>

            <TableHead className="text-right">Overall Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestResponse.slice(0, 10).map((survey) => (
            <TableRow>
              <TableCell>{survey.product}</TableCell>
              <TableCell>{survey.feedbackMessage}</TableCell>

              <TableCell className="text-right">
                {survey.overallSatisfaction}/10
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
