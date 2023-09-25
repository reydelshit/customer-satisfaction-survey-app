import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ButtonScale({
  setRating,
}: {
  setRating: (value: number) => void;
}) {
  const [numberOfButtons] = useState<number[]>(
    Array.from({ length: 10 }, (_, i) => i),
  );

  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleClick = (number: number) => {
    console.log(number + 1);

    setRating(number + 1);

    setSelectedRating(number);
  };

  //   active:bg-violet-700 focus:bg-violet-700 mr-2 my-2

  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => i).map((number) => {
        const isSelected = selectedRating === number;
        return (
          <Button
            onClick={() => handleClick(number)}
            key={number}
            className={`${
              isSelected ? 'bg-violet-700' : ''
            } focus:bg-violet-700 mr-2 my-2`}
          >
            {number + 1}
          </Button>
        );
      })}
    </div>
  );
}
