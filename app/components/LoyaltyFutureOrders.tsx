import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function LoyaltyFutureOrders({
  LFORating,
  setLFORating,
  LFOQ1,
  setLFOQ1,
  LFOQ2,
  setLFOQ2,
  LFOQ3,
  setLFOQ3,
  value,
}: any) {
  return (
    <div className="mt-4">
      <h1 className="mb-2">Loyalty and Future Orders:</h1>
      <div>
        <Label htmlFor="services">
          How likely are you to order the{' '}
          <span className="font-bold">{value}</span> from us again in the
          future?
        </Label>
        <br />
        <Label className="text-gray-400 ml-2" htmlFor="services">
          (1 = Very Poor, 5 = Average, 10 = Excellent)
        </Label>

        <Input
          type="number"
          max={10}
          onChange={(e) => setLFORating(Number(e.target.value))}
          id="services"
          placeholder="0"
        />
      </div>

      <div className="mt-2">
        <Label htmlFor="quality1">
          If you are considering trying a different food service, what would be
          the primary reason?
        </Label>
        <Input
          onChange={(e) => setLFOQ1(e.target.value)}
          id="quality1"
          placeholder="Enter your answer here"
        />
      </div>
      <div className="mt-2">
        <Label htmlFor="quality1">
          (Optional) Can you provide some basic demographic information to help
          us better understand your feedback? (e.g., age, gender)
        </Label>
        <Input
          onChange={(e) => setLFOQ2(e.target.value)}
          id="quality1"
          placeholder="age"
        />
        <Input
          onChange={(e) => setLFOQ2(e.target.value)}
          className="mt-2"
          id="quality1"
          placeholder="gender"
        />
      </div>
    </div>
  );
}
