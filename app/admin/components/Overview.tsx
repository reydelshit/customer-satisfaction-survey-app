import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Chart from './Chart';
import TotalSurvey from './TotalSurvey';
import ResponseRate from './ResponseRate';
import PositiveRate from './PositiveRate';
import TodayResponse from './TodayResponse';
import LatestResponse from './LatestResponse';

export default function Overview() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="listing">Survey Listing</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="flex flex-col">
          <div className="flex justify-between gap-2 mt-5">
            <TotalSurvey />
            <ResponseRate />
            <TodayResponse />
            <PositiveRate />
          </div>
          <div className="flex gap-10 w-full mt-5 justify-between border-2">
            <div className="w-[60%] border-2 p-8">
              <h1 className="mb-5 font-bold">Bar graph of responses</h1>
              <Chart />
            </div>
            <LatestResponse />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="listing">Change your password here.</TabsContent>
    </Tabs>
  );
}
