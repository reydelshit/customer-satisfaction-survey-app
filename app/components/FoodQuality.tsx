import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function FoodQuality({
  foodRating,
  setFoodRating,
  foodQualityQ1,
  setFoodQualityQ1,
  foodQualityQ2,
  setFoodQualityQ2,
  value,
}: {
  foodRating: number;
  setFoodRating: (value: number) => void;
  foodQualityQ1: string;
  setFoodQualityQ1: (value: string) => void;
  foodQualityQ2: string;
  setFoodQualityQ2: (value: string) => void;
  value: string;
}) {
  return (
    <div className="mt-4">
      <h1 className="mb-2">Food Quality:</h1>
      <div>
        <Label htmlFor="services">
          How would you rate the taste and quality of the{' '}
          <span className="font-bold">{value}</span> ?
        </Label>
        <br />
        <Label className="text-gray-400 ml-2" htmlFor="services">
          (1 = Very Poor, 5 = Average, 10 = Excellent)
        </Label>

        <Input
          type="number"
          onChange={(e) => setFoodRating(Number(e.target.value))}
          id="services"
          placeholder="0"
        />
      </div>

      <div className="mt-2">
        <Label htmlFor="quality1">
          Were there any specific flavors, ingredients, or aspects of the{' '}
          <span className="font-bold">{value}</span> that you particularly liked
          or disliked? (Open-ended)
        </Label>
        <Input
          onChange={(e) => setFoodQualityQ1(e.target.value)}
          id="quality1"
          placeholder="Enter your answer here"
        />
      </div>

      <div className="mt-2">
        <Label htmlFor="quality1">
          Did the <span className="font-bold">{value}</span> meet your
          expectations in terms of taste and presentation?
        </Label>
        <Input
          onChange={(e) => setFoodQualityQ2(e.target.value)}
          id="quality1"
          placeholder="Enter your answer here"
        />
      </div>
    </div>
  );
}
