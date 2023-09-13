import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function Recommendation({
  recommendation,
  setRecommendation,
  recommendationQ1,
  setRecommendationQ1,
  value,
}: any) {
  const [isRecommended, setIsRecommended] = useState(false);
  const [decider, setDecider] = useState('');

  const handleRecommendChange = (e: any) => {
    setIsRecommended(e);
    setDecider(e);

    if (e === 'yes') {
      setRecommendation(true);
    } else {
      setRecommendation(false);
    }
  };

  return (
    <div className="mt-4">
      <h1 className="mb-2">Recommendation:</h1>
      <div>
        <Label htmlFor="services">
          Would you recommend the <span className="font-bold">{value}</span> to
          others?
        </Label>
        <br />

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={decider === 'yes' ? true : false}
              onCheckedChange={() => handleRecommendChange('yes')}
            />
            <Label htmlFor="recom">yes</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={decider === 'no' ? true : false}
              onCheckedChange={() => handleRecommendChange('no')}
            />
            <Label htmlFor="recom">no</Label>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Label htmlFor="quality1">
          What improvements or changes to the{' '}
          <span className="font-bold">{value} </span>
          would make you more likely to recommend it?
        </Label>
        <Input
          value={recommendationQ1}
          onChange={(e) => setRecommendationQ1(e.target.value)}
          id="quality1"
          placeholder="Enter your answer here"
        />
      </div>
    </div>
  );
}
