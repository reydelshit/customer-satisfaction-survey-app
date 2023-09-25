import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ListingTable({
  latestResponse,
  handleViewDetails,
}: {
  latestResponse: any[];
  handleViewDetails: (id: number) => void;
}) {
  return (
    <div className="w-full md:w-[30%]">
      <Label className="font-bold mb-5 block">
        Total Respondent: {latestResponse.length}
      </Label>
      {latestResponse && latestResponse.length > 0 ? (
        <Table className="w-full self-end">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Feedback</TableHead>

              <TableHead className="text-right">Overall Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-full">
            {latestResponse &&
              latestResponse.length > 0 &&
              latestResponse.map((survey) => (
                <TableRow
                  key={survey.id}
                  onClick={() => handleViewDetails(survey.id)}
                  className="cursor-pointer"
                >
                  <TableCell>{survey.product}</TableCell>
                  <TableCell>{survey.feedbackMessage?.slice(0, 50)}</TableCell>

                  <TableCell className="text-right">
                    {survey.overallSatisfaction}/10
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <div className="h-[30rem] grid place-items-center place-content-center">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
