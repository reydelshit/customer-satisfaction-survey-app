'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import FoodQuality from './components/FoodQuality';
import Overall from './components/Overall';
import ServiceExperience from './components/ServiceExperience';
import LoyaltyFutureOrders from './components/LoyaltyFutureOrders';
import Recommendation from './components/Recommendation';
import Additional from './components/Additional';
import { submitSurvey } from './actions/submitSurvey';
import { ToggleTheme } from '@/components/ToggleTheme';
import { getAllCake } from './admin/action/getCake';

interface Cake {
  id: number;
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function Home() {
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

  const { toast } = useToast();

  const clearState = () => {
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

    console.log('clear state');
  };

  const [storeCake, setStoreCake] = useState<Cake[]>([]);

  const getCake = async () => {
    const cakes = await getAllCake();
    setStoreCake(cakes);
  };

  useEffect(() => {
    getCake();
  }, []);

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

    console.log('clear state');
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-5 md:p-24">
      <div className="w-full flex justify-end md:mt-[-2rem]">
        <ToggleTheme />
      </div>
      <div className="md:w-[30%] text-center md:p-2">
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

          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full mt-5 justify-between"
                >
                  {value
                    ? storeCake.find((framework) => framework.name === value)
                        ?.name
                    : 'Select services...'}
                  <span>↓</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[30rem] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search services..."
                    className="h-9"
                  />
                  <CommandEmpty>No services found.</CommandEmpty>
                  <CommandGroup>
                    {storeCake.map((framework) => (
                      <CommandItem
                        key={framework.name}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                        }}
                      >
                        {framework.name}
                        <span
                          className={cn(
                            'ml-auto h-4 w-4',
                            value === framework.name
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        ></span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <Label className="text-gray-400 ml-2" htmlFor="services">
              Food services offered
            </Label>
          </div>

          {value && (
            <>
              {/*overall here */}
              <Overall
                overallRating={overallRating}
                setOverallRating={setOverallRating}
                value={value}
              />
              {/* food quality  */}
              <FoodQuality
                foodRating={foodRating}
                setFoodRating={setFoodRating}
                foodQualityQ1={foodQualityQ1}
                setFoodQualityQ1={setFoodQualityQ1}
                foodQualityQ2={foodQualityQ2}
                setFoodQualityQ2={setFoodQualityQ2}
                value={value}
              />

              {/* Service Experience:  */}
              <ServiceExperience
                serviceRating={serviceRating}
                setServiceRating={setServiceRating}
                serviceQ1={serviceQ1}
                setServiceQ1={setServiceQ1}
              />

              {/* Recommendation */}
              <Recommendation
                recommendation={recommendation}
                setRecommendation={setRecommendation}
                recommendationQ1={recommendationQ1}
                setRecommendationQ1={setRecommendationQ1}
                value={value}
              />

              {/* Loyalty and Future Orderrss:  */}
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

              {/* additional:  */}
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
