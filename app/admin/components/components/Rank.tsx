export default function Rank({ rating }: { rating: any }) {
  return (
    <>
      {rating.length > 0 && (
        <div className="relative border-2 h-[20rem] w-[20rem] p-10 rounded-sm">
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
      )}

      {rating.length > 0 && (
        <div className="flex gap-10">
          <div className="relative border-2 h-[20rem] w-[20rem] p-10 rounded-sm">
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

          <div className=" border-2 h-[20rem] w-[20rem] p-10 relative rounded-sm">
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
        </div>
      )}
    </>
  );
}