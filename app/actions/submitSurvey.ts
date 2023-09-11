'use server';

import { prisma } from '@/prisma/db';

export async function submitSurvey({
  name,
  product,
  overallSatisfaction,
  foodQualityRate,
  foodQualityQ1,
  foodQualityQ2,
  serviceExperience,
  serviceExperienceQ1,
  recommendation,
  recommendationQ1,
  LFO,
  LFOQ1,
  LFOQ2,
  LFOQ3,
  feedbackMessage,
}: {
  name: string;
  product: string;
  overallSatisfaction: number;
  foodQualityRate: number;
  foodQualityQ1: string;
  foodQualityQ2: string;
  serviceExperience: number;
  serviceExperienceQ1: string;
  recommendation: boolean;
  recommendationQ1: string;
  LFO: number;
  LFOQ1: string;
  LFOQ2: string;
  LFOQ3: string;
  feedbackMessage: string;
}) {
  await prisma.feedback.create({
    data: {
      name,
      product,
      overallSatisfaction,
      foodQualityRate,
      foodQualityQ1,
      foodQualityQ2,
      serviceExperience,
      serviceExperienceQ1,
      recommendation,
      recommendationQ1,
      LFO,
      LFOQ1,
      LFOQ2,
      LFOQ3,
      feedbackMessage,
    },
  });

  console.log('survey added');
}
