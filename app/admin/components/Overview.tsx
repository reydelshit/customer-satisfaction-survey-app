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
import Chart from './components/Chart';
import TotalSurvey from './components/TotalSurvey';
import ResponseRate from './components/ResponseRate';
import PositiveRate from './components/PositiveRate';
import TodayResponse from './components/TodayResponse';
import LatestResponse from './components/LatestResponse';
import Listing from './Listing';
import { prisma } from '@/prisma/db';
import Rankings from './Rankings';

export default function Overview() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="listing">Survey Listing</TabsTrigger>
        <TabsTrigger value="rankings">Rankings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="flex flex-col">
          <div className="flex justify-between gap-2 mt-5">
            <TotalSurvey />
            <ResponseRate />
            <TodayResponse />
            <PositiveRate />
          </div>
          <div className="flex gap-10 w-full mt-5 justify-between">
            <div className="w-[60%] p-8">
              <h1 className="mb-5 font-bold uppercase">
                Bar graph of responses
              </h1>
              <Chart />
            </div>
            <LatestResponse />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="listing">
        <Listing />
      </TabsContent>

      <TabsContent value="rankings">
        <Rankings />
      </TabsContent>
    </Tabs>
  );
}
