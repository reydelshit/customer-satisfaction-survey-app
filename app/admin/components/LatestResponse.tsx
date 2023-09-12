import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function LatestResponse() {
  return (
    <div className="w-[40%] p-8">
      <h1 className="font-bold mb-2">Latest Responses</h1>
      <Table className="w-full self-end border-2">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Feedback</TableHead>

            <TableHead className="text-right">Overall Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Trash Cocomelon</TableCell>
            <TableCell>Taste so good</TableCell>

            <TableCell className="text-right">9/10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
