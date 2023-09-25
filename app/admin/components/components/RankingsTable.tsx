import Rank from './Rank';

export default function RankingsTable({
  selectedSort,
  overallAverageRating,
  selectedTitle,
}: {
  selectedSort: any;
  overallAverageRating: any;
  selectedTitle: string;
}) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <div className="w-full md:w-[50rem] flex flex-col justify-center items-center p-2">
        <div>
          {selectedSort.length !== 0 ? (
            <Rank rating={selectedSort} selectedTitle={selectedTitle} />
          ) : (
            <Rank rating={overallAverageRating} selectedTitle={selectedTitle} />
          )}
        </div>
      </div>
    </div>
  );
}
