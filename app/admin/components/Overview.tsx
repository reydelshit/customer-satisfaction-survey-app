import Chart from './components/Chart';
import TotalSurvey from './components/TotalSurvey';
import ResponseRate from './components/ResponseRate';
import PositiveRate from './components/PositiveRate';
import TodayResponse from './components/TodayResponse';
import LatestResponse from './components/LatestResponse';

export default function Overview() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between gap-2 mt-5">
        <TotalSurvey />
        <ResponseRate />
        <TodayResponse />
        <PositiveRate />
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 w-full mt-5 justify-between">
        <Chart />
        <LatestResponse />
      </div>
    </div>
  );
}
