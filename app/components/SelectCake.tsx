import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/lib/utils';

export default function SelectCake({
  setOpen,
  open,
  value,
  setValue,
  storeCake,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
  value: string;
  setValue: (value: string) => void;
  storeCake: any[];
}) {
  return (
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
              ? storeCake.find((framework) => framework.name === value)?.name
              : 'Select services...'}
            <span>↓</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[30rem] p-0">
          <Command>
            <CommandInput placeholder="Search services..." className="h-9" />
            <CommandEmpty>No services found.</CommandEmpty>
            <CommandGroup>
              {storeCake.map((framework) => (
                <CommandItem
                  key={framework.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.name}
                  <span
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === framework.name ? 'opacity-100' : 'opacity-0',
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
  );
}
