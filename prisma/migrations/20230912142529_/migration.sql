-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "overallSatisfaction" INTEGER NOT NULL,
    "foodQualityRate" INTEGER NOT NULL,
    "foodQualityQ1" TEXT,
    "foodQualityQ2" TEXT,
    "serviceExperience" INTEGER NOT NULL,
    "serviceExperienceQ1" TEXT,
    "recommendation" BOOLEAN NOT NULL,
    "recommendationQ1" TEXT,
    "LFO" INTEGER NOT NULL,
    "LFOQ1" TEXT,
    "LFOQ2" TEXT,
    "LFOQ3" TEXT,
    "feedbackMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
