import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Recommendation({ value }: { value: string }) {
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
            <Checkbox />
            <Label htmlFor="recom">yes</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox />
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
        <Input id="quality1" placeholder="Enter your answer here" />
      </div>
    </div>
  );
}
