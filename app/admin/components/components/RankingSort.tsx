import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RankingSort({
  handleSorting,
}: {
  handleSorting: (value: string) => void;
}) {
  return (
    <div className="self-end">
      <Select onValueChange={handleSorting}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Overall">Overall</SelectItem>
          <SelectItem value="Food">Food Quality</SelectItem>
          <SelectItem value="Service">Service Quality</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
