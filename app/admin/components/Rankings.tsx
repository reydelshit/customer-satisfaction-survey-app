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
        <div className="w-[50rem] flex flex-col justify-center items-center p-2">
          <div className="flex flex-wrap flex-col justify-center items-center gap-10">
            {/* Rank 1 */}

            {overallAverageRating.length > 0 && (
              <div className="relative border-2 h-[20rem] w-[20rem] p-10 rounded-sm">
                <div className="border-[0.3rem] border-blue-600 h-full">
                  image diri
                </div>

                <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
                  <h1 className="font-bold text-3xl text-blue-600">
                    {overallAverageRating[0].product}
                  </h1>
                  <h1 className="text-blue-500 font-bold">
                    {overallAverageRating[0].averageRating}
                  </h1>
                  <p className="text-blue-500 font-bold">RANK 1</p>
                </div>
              </div>
            )}

            {overallAverageRating.length > 0 && (
              <div className="flex gap-10">
                <div className="relative border-2 h-[20rem] w-[20rem] p-10 rounded-sm">
                  <div className="border-[0.3rem] border-red-600 h-full">
                    image diri
                  </div>

                  <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
                    <h1 className="font-bold text-3xl text-red-600">
                      {overallAverageRating[1].product}
                    </h1>
                    <h1 className="text-red-500 font-bold">
                      {overallAverageRating[1].averageRating}
                    </h1>
                    <p className="text-red-500 font-bold">RANK 2</p>
                  </div>
                </div>

                <div className=" border-2 h-[20rem] w-[20rem] p-10 relative rounded-sm">
                  <div className="border-[0.3rem] border-black h-full">
                    image diri
                  </div>

                  <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
                    <h1 className="font-bold text-3xl">
                      {overallAverageRating[2].product}
                    </h1>
                    <h1 className="text-gray-900 font-bold">
                      {overallAverageRating[2].averageRating}
                    </h1>
                    <p className="text-gray-900 font-bold">RANK 3</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
