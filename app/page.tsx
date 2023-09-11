'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
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
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const frameworks = [
    {
      value: 'cocomelon',
      label: 'Cocomelon',
    },
    {
      value: 'mango',
      label: 'Mango',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[30%] text-center">
        <h1 className="mb-4 font-semibold">reydel's customer survey app</h1>
        <div className="text-start flex flex-col">
          <Input id="name" placeholder="Name" />
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
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : 'Select services...'}
                  <span>↓</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput
                    placeholder="Search services..."
                    className="h-9"
                  />
                  <CommandEmpty>No services found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <span
                          className={cn(
                            'ml-auto h-4 w-4',
                            value === framework.value
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

          {/* star rating here */}

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
            <Input id="scale" placeholder="0" />
          </div>

          {/* food quality  */}
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

              <Input id="services" placeholder="0" />
            </div>

            <div className="mt-2">
              <Label htmlFor="quality1">
                Were there any specific flavors, ingredients, or aspects of the{' '}
                <span className="font-bold">{value}</span> that you particularly
                liked or disliked? (Open-ended)
              </Label>
              <Input id="quality1" placeholder="Enter your answer here" />
            </div>

            <div className="mt-2">
              <Label htmlFor="quality1">
                Did the <span className="font-bold">{value}</span> meet your
                expectations in terms of taste and presentation?
              </Label>
              <Input id="quality1" placeholder="Enter your answer here" />
            </div>
          </div>

          {/* Service Experience:  */}
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
                Were any special dietary requests or preferences (e.g.,
                allergies, vegetarian, vegan) accommodated to your satisfaction?
              </Label>
              <Input id="quality1" placeholder="Enter your answer here" />
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-4">
            <h1 className="mb-2">Recommendation:</h1>
            <div>
              <Label htmlFor="services">
                Would you recommend the{' '}
                <span className="font-bold">{value}</span> to others?
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

          {/* Loyalty and Future Orders:  */}
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

              <Input id="services" placeholder="0" />
            </div>

            <div className="mt-2">
              <Label htmlFor="quality1">
                If you are considering trying a different food service, what
                would be the primary reason?
              </Label>
              <Input id="quality1" placeholder="Enter your answer here" />
            </div>

            <div className="mt-2">
              <Label htmlFor="quality1">
                (Optional) Can you provide some basic demographic information to
                help us better understand your feedback? (e.g., age, gender)
              </Label>
              <Input id="quality1" placeholder="age" />
              <Input className="mt-2" id="quality1" placeholder="gender" />
            </div>
          </div>

          {/* Loyalty and Future Orders:  */}
          <div className="mt-4">
            <h1 className="mb-2">Loyalty and Future Orders:</h1>
            <div>
              <Label htmlFor="services">
                Is there anything else you'd like to share about your experience
                with the <span className="font-bold">{value}</span> or
                suggestions for improvement? (Open-ended)
              </Label>
              <br />
              <Textarea
                className="mt-4"
                placeholder="Type your feedback here."
              />
            </div>
          </div>
        </div>
        <Button className="mt-2">Submit</Button>
      </div>
    </main>
  );
}
