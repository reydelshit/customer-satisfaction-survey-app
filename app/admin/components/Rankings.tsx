'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

import { getAllSurvey } from '../action/getTotalSurvey';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Rank from './components/Rank';

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
  name?: string;
}

export default function Rankings() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  // const [numberOfProduct, setNumberOfProduct] = useState<number>(0);
  const [overallAverageRating, setOverallAverageRating] = useState<
    AverageRatingProduct[]
  >([]);
  const [foodAverageRating, setFoodAverageRating] = useState<
    AverageRatingProduct[]
  >([]);
  const [serviceAverageRating, setServiceAverageRating] = useState<
    AverageRatingProduct[]
  >([]);

  const [selectedSort, setSelectedSort] =
    useState<AverageRatingProduct[]>(overallAverageRating);

  async function fetchOverallRating() {
    try {
      const feedbackSurvey: Feedback[] = await getAllSurvey();
      if (feedbackSurvey) {
        setFeedbacks(feedbackSurvey);

        // console.log(feedbackSurvey);

        // overall rate average
        const averageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            // setNumberOfProduct(item.product.length);
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

        // food quality rate
        const foodAverageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            // setNumberOfProduct(item.product.length);
            acc[item.product].sum += item.foodQualityRate;
            acc[item.product].count++;

            return acc;
          }, {} as Record<string, AverageRating>);

        for (const product in foodAverageRatings) {
          if (foodAverageRatings.hasOwnProperty(product)) {
            const average =
              foodAverageRatings[product].sum /
              foodAverageRatings[product].count;
            setFoodAverageRating((prev) => [
              ...prev,
              { product, averageRating: average },
            ]);
          }
        }

        // service quality rate
        const serviceAverageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            // setNumberOfProduct(item.product.length);
            acc[item.product].sum += item.serviceExperience;
            acc[item.product].count++;

            return acc;
          }, {} as Record<string, AverageRating>);

        for (const product in serviceAverageRatings) {
          if (serviceAverageRatings.hasOwnProperty(product)) {
            const average =
              serviceAverageRatings[product].sum /
              serviceAverageRatings[product].count;
            setServiceAverageRating((prev) => [
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
    fetchOverallRating();
  }, []);

  const handleSorting = (event: string) => {
    const selectedValue = event;
    if (selectedValue === 'Overall') {
      setSelectedSort(overallAverageRating);
    }

    if (selectedValue === 'Food') {
      setSelectedSort(foodAverageRating);
    }

    if (selectedValue === 'Service') {
      setSelectedSort(serviceAverageRating);
    }

    console.log('sorted');
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center text-center">
      <div className="self-end">
        <Select onValueChange={handleSorting}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Overall">Overall</SelectItem>
            <SelectItem value="Food">Food Quality</SelectItem>
            <SelectItem value="Service">Service Quality</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <div className="w-[50rem] flex flex-col justify-center items-center p-2">
          <div className="flex flex-wrap flex-col justify-center items-center gap-10">
            <Rank rating={selectedSort} />
          </div>
        </div>
      </div>
    </div>
  );
}
