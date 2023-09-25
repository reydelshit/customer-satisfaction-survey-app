'use client';

import { getAllSurvey } from '../action/getTotalSurvey';
import { useState, useEffect } from 'react';

import ListingTable from './components/ListingTable';
import ListingViewDetails from './components/ListingViewDetails';

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

export default function Listing() {
  const [latestResponse, setLatestResponse] = useState<Feedback[]>([]);
  const [holdTheId, setHoldTheId] = useState<number>(0);
  const [decider, setDecider] = useState<boolean>(false);
  const [analyzeDecider, setAnalyzeDecider] = useState<boolean>(false);
  const [rating, setRating] = useState({
    overallSatisfaction: 0,
    foodQualityRate: 0,
    serviceExperience: 0,
  });

  const [showLoadingContent, setShowLoadingContent] = useState(false);

  async function fetchTotalSurvey() {
    try {
      const latestRes = await getAllSurvey();
      if (latestRes) {
        setLatestResponse(latestRes);
      }
    } catch (error) {
      console.error('listing', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  const handleViewDetails = (id: number) => {
    setHoldTheId(id);
    setDecider(true);
    setAnalyzeDecider(false);
  };

  const analyzeNow = async () => {
    latestResponse
      .filter((survey) => survey.id === holdTheId)
      .map((survey) => {
        setRating({
          overallSatisfaction: survey.overallSatisfaction,
          foodQualityRate: survey.foodQualityRate,
          serviceExperience: survey.serviceExperience,
        });
      });
  };

  const handleAnalyzeGpt = () => {
    setAnalyzeDecider(true);
    setShowLoadingContent(true);
    const delay = 5000;
    setTimeout(() => {
      setShowLoadingContent(false);
      analyzeNow();
    }, delay);
  };
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-8 justify-between md:gap-10">
      <ListingTable
        latestResponse={latestResponse}
        handleViewDetails={handleViewDetails}
      />
      <ListingViewDetails
        decider={decider}
        latestResponse={latestResponse}
        handleAnalyzeGpt={handleAnalyzeGpt}
        analyzeDecider={analyzeDecider}
        showLoadingContent={showLoadingContent}
        rating={rating}
        holdTheId={holdTheId}
      />
    </div>
  );
}
