import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Additional({ value }: { value: string }) {
  return (
    <div className="mt-4">
      <h1 className="mb-2">Additional:</h1>
      <div>
        <Label htmlFor="services">
          Is there anything else you'd like to share about your experience with
          the <span className="font-bold">{value}</span> or suggestions for
          improvement? (Open-ended)
        </Label>
        <br />
        <Textarea className="mt-4" placeholder="Type your feedback here." />
      </div>
    </div>
  );
}
