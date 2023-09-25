import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function Rank({
  rating,
  selectedTitle,
}: {
  rating: any;
  selectedTitle: string;
}) {
  return (
    <>
      {rating.length > 0 ? (
        <>
          {/* <div className="relative h-[20rem] w-full md:w-[20rem] md:p-10 rounded-sm mb-2">
            <div className="border-[0.3rem] border-blue-600 h-full">
              image diri
            </div>

            <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
              <h1 className="font-bold text-3xl text-blue-600">
                {rating[0].product}
              </h1>
              <h1 className="text-blue-500 font-bold">
                {rating[0].averageRating}
              </h1>
              <p className="text-blue-500 font-bold">RANK 1</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="relative h-[20rem] w-full md:w-[20rem] md:p-10 rounded-sm mb-2">
              <div className="border-[0.3rem] border-red-600 h-full">
                image diri
              </div>

              <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
                <h1 className="font-bold text-3xl text-red-600">
                  {rating[1].product}
                </h1>
                <h1 className="text-red-500 font-bold">
                  {rating[1].averageRating}
                </h1>
                <p className="text-red-500 font-bold">RANK 2</p>
              </div>
            </div>

            <div className=" h-[20rem] w-[20rem] md:p-10 relative rounded-sm">
              <div className="border-[0.3rem] border-black h-full">
                image diri
              </div>

              <div className="absolute left-0 bottom-[5rem] bg-white z-10 h-[3rem] text-center w-full  grid place-content-center">
                <h1 className="font-bold text-3xl">{rating[2].product}</h1>
                <h1 className="text-gray-900 font-bold">
                  {rating[2].averageRating}
                </h1>
                <p className="text-gray-900 font-bold">RANK 3</p>
              </div>
            </div>
          </div> */}
          <div className="w-[50rem] flex flex-col">
            <h1 className="font-bold text-2xl">{selectedTitle}</h1>
            <Table className="text-center w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rating.map((rat: any, index: number) => {
                  return (
                    <>
                      <TableRow className="text-start">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{rat.product}</TableCell>
                        <TableCell>{rat.averageRating}</TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>

            <Button onClick={() => window.print()} className="self-end">
              Export
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] grid place-content-center">
          <div className="spinner w-full h-full"></div>
        </div>
      )}
    </>
  );
}
