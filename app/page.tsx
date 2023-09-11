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
import FoodQuality from './components/FoodQuality';
import Overall from './components/Overall';
import ServiceExperience from './components/ServiceExperience';
import LoyaltyFutureOrders from './components/LoyaltyFutureOrders';
import Recommendation from './components/Recommendation';
import Additional from './components/Additional';

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
              <PopoverContent className="w-[30rem] p-0">
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

          {/*overall here */}
          <Overall value={value} />
          {/* food quality  */}
          <FoodQuality value={value} />

          {/* Service Experience:  */}
          <ServiceExperience value={value} />

          {/* Recommendation */}
          <Recommendation value={value} />

          {/* Loyalty and Future Orders:  */}

          <LoyaltyFutureOrders value={value} />

          {/* additional:  */}
          <Additional value={value} />
        </div>
        <Button className="mt-2">Submit</Button>
      </div>
    </main>
  );
}
