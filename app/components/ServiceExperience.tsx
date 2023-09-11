import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ServiceExperience({ value }: { value: string }) {
  return (
    <div className="mt-4">
      <h1 className="mb-2">Service Experience:</h1>
      <div>
        <Label htmlFor="services">
          How would you rate the speed and efficiency of our food service?
        </Label>
        <br />
        <Label className="text-gray-400 ml-2" htmlFor="services">
          (1 = Very Poor, 5 = Average, 10 = Excellent)
        </Label>

        <Input id="services" placeholder="0" />
      </div>

      <div className="mt-2">
        <Label htmlFor="quality1">
          Were any special dietary requests or preferences (e.g., allergies,
          vegetarian, vegan) accommodated to your satisfaction?
        </Label>
        <Input id="quality1" placeholder="Enter your answer here" />
      </div>
    </div>
  );
}
