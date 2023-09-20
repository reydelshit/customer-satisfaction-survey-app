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

interface AverageRating {
  sum: number;
  count: number;
}

interface AverageRatingProduct {
  product: string;
  averageRating: number;
}

export default function Rankings() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [sorted, setSorted] = useState<Feedback[]>([]);
  const [numberOfProduct, setNumberOfProduct] = useState<number>(0);
  const [overallAverageRating, setOverallAverageRating] = useState<
    AverageRatingProduct[]
  >([]);

  async function fetchTotalSurvey() {
    try {
      const feedbackSurvey: Feedback[] = await getAllSurvey();
      if (feedbackSurvey) {
        setFeedbacks(feedbackSurvey);

        // console.log(feedbackSurvey);

        const averageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            setNumberOfProduct(item.product.length);
            acc[item.product].sum += item.overallSatisfaction;
            acc[item.product].count++;

            return acc;
          }, {} as Record<string, AverageRating>);

        let numberOfProd = 0;
        for (const product in averageRatings) {
          if (averageRatings.hasOwnProperty(product)) {
            numberOfProd++;
            const average =
              averageRatings[product].sum / averageRatings[product].count;
            setOverallAverageRating((prev) => [
              ...prev,
              { product, averageRating: average },
            ]);
          }
        }
      }
    } catch (error) {
      console.error('listing', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center text-center">
      <Button className="self-end w-[8rem]">Sort</Button>
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <div className="w-[15rem] h-[10rem] border-2">
          {overallAverageRating
            .sort((a, b) => b.averageRating - a.averageRating)
            .map((item, index) => (
              <div className="border-2" key={index}>
                {index == 0 && (
                  <div>
                    {item.averageRating} {item.product}
                  </div>
                )}
                {index !== 0 && (
                  <div key={index}>
                    {item.averageRating} {item.product}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
