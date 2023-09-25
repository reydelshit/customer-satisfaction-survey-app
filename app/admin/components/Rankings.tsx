'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

import { getAllSurvey } from '../action/getTotalSurvey';

import Rank from './components/Rank';
import RankingsTable from './components/RankingsTable';
import RankingSort from './components/RankingSort';

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
  const [selectedTitle, setSelectedTitle] = useState<string>('Overall');

  async function fetchOverallRating() {
    try {
      const feedbackSurvey: Feedback[] = await getAllSurvey();
      if (feedbackSurvey) {
        setFeedbacks(feedbackSurvey);

        const averageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            acc[item.product].sum += item.overallSatisfaction;
            acc[item.product].count++;

            return acc;
          }, {} as Record<string, AverageRating>);

        const averageRatingsArray = Object.keys(averageRatings).map(
          (product) => ({
            product,
            averageRating:
              averageRatings[product].sum / averageRatings[product].count,
          }),
        );
        averageRatingsArray.sort((a, b) => b.averageRating - a.averageRating);
        setOverallAverageRating(averageRatingsArray);

        // food quality rate
        const foodAverageRatings: Record<string, AverageRating> =
          feedbackSurvey.reduce((acc, item) => {
            if (!acc[item.product]) {
              acc[item.product] = { sum: 0, count: 0 };
            }
            acc[item.product].sum += item.foodQualityRate;
            acc[item.product].count++;

            return acc;
          }, {} as Record<string, AverageRating>);

        const foodRatingsArray = Object.keys(foodAverageRatings).map(
          (product) => ({
            product,
            averageRating:
              foodAverageRatings[product].sum /
              foodAverageRatings[product].count,
          }),
        );
        foodRatingsArray.sort((a, b) => b.averageRating - a.averageRating);
        setFoodAverageRating(foodRatingsArray);

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

        const serviceRatingsArray = Object.keys(serviceAverageRatings).map(
          (product) => ({
            product,
            averageRating:
              serviceAverageRatings[product].sum /
              serviceAverageRatings[product].count,
          }),
        );
        serviceRatingsArray.sort((a, b) => b.averageRating - a.averageRating);
        setServiceAverageRating(serviceRatingsArray);
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
      setSelectedTitle('Overall');
    } else if (selectedValue === 'Food') {
      setSelectedSort(foodAverageRating);
      setSelectedTitle('Food Quality');
    } else if (selectedValue === 'Service') {
      setSelectedSort(serviceAverageRating);
      setSelectedTitle('Service Quality');
    } else {
      setSelectedSort(overallAverageRating);
      setSelectedTitle('Overall');
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center text-center mt-5">
      <RankingSort handleSorting={handleSorting} />

      <RankingsTable
        selectedSort={selectedSort}
        overallAverageRating={overallAverageRating}
        selectedTitle={selectedTitle}
      />
    </div>
  );
}
