import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ButtonScale from './ButtonScale';

export default function Overall({
  overallRating,
  setOverallRating,
  value,
}: {
  overallRating: number;
  setOverallRating: (value: number) => void;
  value: string;
}) {
  return (
    <div className="mt-4">
      <h1 className="mb-2">Overall Satisfaction:</h1>
      <Label className=" ml-2" htmlFor="scale">
        On a scale of 1 to 10, how satisfied are you with the{' '}
        <span className="font-bold">{value}</span> ?
      </Label>
      <br />
      <Label className="text-gray-400 ml-2" htmlFor="services">
        (1 = Very Poor, 5 = Average, 10 = Excellent)
      </Label>
      <ButtonScale setRating={setOverallRating} />

      {/* <Input
        value={overallRating.toString()}
        type="number"
        max={10}
        onChange={(e) => setOverallRating(Number(e.target.value))}
        id="scale"
        placeholder="0"
      /> */}
    </div>
  );
}
