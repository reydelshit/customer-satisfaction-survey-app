'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { submitSurvey } from './actions/submitSurvey';
import { ToggleTheme } from '@/components/ToggleTheme';
import { getAllCake } from './admin/action/getCake';

// components
import SelectCake from './components/SelectCake';
import FoodQuality from './components/FoodQuality';
import Overall from './components/Overall';
import ServiceExperience from './components/ServiceExperience';
import LoyaltyFutureOrders from './components/LoyaltyFutureOrders';
import Recommendation from './components/Recommendation';
import Additional from './components/Additional';

interface Cake {
  id: number;
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function Home() {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const [name, setName] = useState('');
  const [overallRating, setOverallRating] = useState(0);

  // food quality
  const [foodRating, setFoodRating] = useState(0);
  const [foodQualityQ1, setFoodQualityQ1] = useState('');
  const [foodQualityQ2, setFoodQualityQ2] = useState('');

  // service experience
  const [serviceRating, setServiceRating] = useState(0);
  const [serviceQ1, setServiceQ1] = useState('');

  // recommendation
  const [recommendation, setRecommendation] = useState(true);
  const [recommendationQ1, setRecommendationQ1] = useState('');

  // loyalty and future orders
  const [LFORating, setLFORating] = useState(0);
  const [LFOQ1, setLFOQ1] = useState('');
  const [LFOQ2, setLFOQ2] = useState('');
  const [LFOQ3, setLFOQ3] = useState('');

  // Additional
  const [feedback, setFeedback] = useState('');

  const [storeCake, setStoreCake] = useState<Cake[]>([]);

  const getCake = async () => {
    const cakes = await getAllCake();
    setStoreCake(cakes);
  };

  useEffect(() => {
    getCake();
  }, []);

  const clearInputFields = () => {
    setName('');
    setOverallRating(0);
    setFoodRating(0);
    setFoodQualityQ1('');
    setFoodQualityQ2('');
    setServiceRating(0);
    setServiceQ1('');
    setRecommendation(true);
    setRecommendationQ1('');
    setLFORating(0);
    setLFOQ1('');
    setLFOQ2('');
    setLFOQ3('');
    setFeedback('');

    // console.log('clear state');
  };

  const handleSubmit = async () => {
    await submitSurvey({
      name: name,
      product: value,
      overallSatisfaction: overallRating,
      foodQualityRate: foodRating,
      foodQualityQ1,
      foodQualityQ2,
      serviceExperience: serviceRating,
      serviceExperienceQ1: serviceQ1,
      recommendation,
      recommendationQ1,
      LFO: LFORating,
      LFOQ1,
      LFOQ2,
      LFOQ3,
      feedbackMessage: feedback,
    });

    toast({
      title: 'Survey submitted',
      description: 'Thank you for your feedback!',
    });

    clearInputFields();
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-5 md:p-24">
      <div className="w-full flex justify-end md:mt-[-4rem]">
        <ToggleTheme />
      </div>
      <div className="md:w-[35%] text-center md:p-2">
        <h1 className="mb-4 font-semibold">reydel's customer survey app</h1>
        <div className="text-start flex flex-col">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
          />
          <Label className="text-gray-400 ml-2 mt-2" htmlFor="name">
            Optional
          </Label>
          <SelectCake
            storeCake={storeCake}
            setOpen={setOpen}
            open={open}
            value={value}
            setValue={setValue}
          />

          {value && (
            <>
              {/*overall here */}
              <Overall
                overallRating={overallRating}
                setOverallRating={setOverallRating}
                value={value}
              />

              <FoodQuality
                foodRating={foodRating}
                setFoodRating={setFoodRating}
                foodQualityQ1={foodQualityQ1}
                setFoodQualityQ1={setFoodQualityQ1}
                foodQualityQ2={foodQualityQ2}
                setFoodQualityQ2={setFoodQualityQ2}
                value={value}
              />

              <ServiceExperience
                serviceRating={serviceRating}
                setServiceRating={setServiceRating}
                serviceQ1={serviceQ1}
                setServiceQ1={setServiceQ1}
              />

              <Recommendation
                recommendation={recommendation}
                setRecommendation={setRecommendation}
                recommendationQ1={recommendationQ1}
                setRecommendationQ1={setRecommendationQ1}
                value={value}
              />

              <LoyaltyFutureOrders
                LFORating={LFORating}
                setLFORating={setLFORating}
                LFOQ1={LFOQ1}
                setLFOQ1={setLFOQ1}
                LFOQ2={LFOQ2}
                setLFOQ2={setLFOQ2}
                LFOQ3={LFOQ3}
                setLFOQ3={setLFOQ3}
                value={value}
              />

              <Additional
                feedback={feedback}
                setFeedback={setFeedback}
                value={value}
              />
            </>
          )}
        </div>
        <Button onClick={handleSubmit} className="mt-2">
          Submit
        </Button>
      </div>

      <Toaster />
    </main>
  );
}
