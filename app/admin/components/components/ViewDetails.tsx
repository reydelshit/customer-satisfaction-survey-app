import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ViewDetails({ survey }: any) {
  return (
    <div className="px-20">
      {/* food quality  */}

      <div className="mt-4">
        <h1 className="mb-2">Food Quality:</h1>
        <div>
          <Label htmlFor="services">
            How would you rate the taste and quality of the{' '}
            <span className="font-bold">{survey.product}</span> ?
          </Label>
          <br />
          <Label className="text-gray-400 ml-2" htmlFor="services">
            (1 = Very Poor, 5 = Average, 10 = Excellent)
          </Label>

          <Input
            type="number"
            value={survey.foodQualityRate}
            placeholder="0"
            readOnly
          />
        </div>

        <div className="mt-2">
          <Label htmlFor="quality1">
            Were there any specific flavors, ingredients, or aspects of the{' '}
            <span className="font-bold">{survey.product}</span> that you
            particularly liked or disliked? (Open-ended)
          </Label>
          <Input
            value={survey.foodQualityQ1!}
            placeholder="Enter your answer here"
            readOnly
          />
        </div>

        <div className="mt-2">
          <Label htmlFor="quality1">
            Did the <span className="font-bold">{survey.product}</span> meet
            your expectations in terms of taste and presentation?
          </Label>
          <Input
            value={survey.foodQualityQ2!}
            placeholder="Enter your answer here"
            readOnly
          />
        </div>
      </div>

      {/* service experience  */}

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

          <Input value={survey.serviceExperience} placeholder="0" readOnly />
        </div>

        <div className="mt-2">
          <Label htmlFor="quality1">
            Were any special dietary requests or preferences (e.g., allergies,
            vegetarian, vegan) accommodated to your satisfaction?
          </Label>
          <Input
            value={survey.serviceExperienceQ1!}
            id="quality1"
            placeholder="Enter your answer here"
            readOnly
          />
        </div>
      </div>

      {/* recommendation  */}

      <div className="mt-4">
        <h1 className="mb-2">Recommendation:</h1>
        <div>
          <Label htmlFor="services">
            Would you recommend the{' '}
            <span className="font-bold">{survey.product}</span> to others?
          </Label>
          <br />

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={survey.recommendation === true ? true : false}
              />
              <Label htmlFor="recom">yes</Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                checked={survey.recommendation === false ? true : false}
              />
              <Label htmlFor="recom">no</Label>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <Label htmlFor="quality1">
            What improvements or changes to the{' '}
            <span className="font-bold">{survey.product} </span>
            would make you more likely to recommend it?
          </Label>
          <Input
            value={survey.recommendationQ1!}
            placeholder="Enter your answer here"
            readOnly
          />
        </div>
      </div>

      {/* loyalty and future orders  */}

      <div className="mt-4">
        <h1 className="mb-2">Loyalty and Future Orders:</h1>
        <div>
          <Label htmlFor="services">
            How likely are you to order the{' '}
            <span className="font-bold">{survey.product}</span> from us again in
            the future?
          </Label>
          <br />
          <Label className="text-gray-400 ml-2" htmlFor="services">
            (1 = Very Poor, 5 = Average, 10 = Excellent)
          </Label>

          <Input
            type="number"
            max={10}
            value={survey.LFO}
            placeholder="0"
            readOnly
          />
        </div>

        <div className="mt-2">
          <Label htmlFor="quality1">
            If you are considering trying a different food service, what would
            be the primary reason?
          </Label>
          <Input
            value={survey.LFOQ1!}
            placeholder="Enter your answer here"
            readOnly
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="quality1">
            (Optional) Can you provide some basic demographic information to
            help us better understand your feedback? (e.g., age, gender)
          </Label>
          <Input value={survey.LFOQ2!} placeholder="age" readOnly />
          <Input
            value={survey.LFOQ3!}
            className="mt-2"
            placeholder="gender"
            readOnly
          />
        </div>
      </div>

      {/* additional  */}
      <div className="mt-4">
        <h1 className="mb-2">Additional:</h1>
        <div>
          <Label htmlFor="services">
            Is there anything else you'd like to share about your experience
            with the <span className="font-bold">{survey.product}</span> or
            suggestions for improvement? (Open-ended)
          </Label>
          <br />
          <Textarea
            value={survey.feedbackMessage!}
            className="mt-4"
            placeholder="Type your feedback here."
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
