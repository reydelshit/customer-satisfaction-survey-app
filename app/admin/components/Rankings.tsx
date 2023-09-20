'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

import { getAllSurvey } from '../action/getTotalSurvey';

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

interface AverageRat {
  product: string;
  overallSatisfaction: number;
}

export default function Rankings() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [sorted, setSorted] = useState<Feedback[]>([]);
  const [averageRating, setAverageRating] = useState();



  async function fetchTotalSurvey() {
    try {
      const feedbackSurvey = await getAllSurvey();
      if (feedbackSurvey) {
        setFeedbacks(feedbackSurvey);

        const averageRatings: AverageRat = feedbacks.reduce((acc, feedback) => {
          const { product, overallSatisfaction } = feedback;
          acc[product] = (acc[product] || 0) + overallSatisfaction;
          return acc;
        }, {});
      }
    } catch (error) {
      console.error('listing', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  // .map((item) => item.overallSatisfaction)
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center text-center">
      <Button className="self-end w-[8rem]">Sort</Button>
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <div className="w-[15rem] h-[10rem] border-2">
          {sorted.length > 0 && sorted[0].product}
        </div>
        <div className="flex gap-5">
          <div className="w-[15rem] h-[10rem] border-2">rank 2</div>
          <div className="w-[15rem] h-[10rem] border-2">rank 3</div>
        </div>
      </div>
    </div>
  );
}
