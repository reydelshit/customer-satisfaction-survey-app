import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Chart from './components/Chart';

export default function Admin() {
  return (
    <div className="flex flex-col p-8 border-2 border-orange-400">
      <h1 className="text-4xl font-bold mb-5">Admin</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="listing">Survey Listing</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="flex flex-col">
            {/* total  */}
            <div className="flex justify-between gap-2 mt-5">
              <Card className="w-[25rem]">
                <CardHeader>
                  <CardTitle>Total Survey Submitted</CardTitle>
                  <CardDescription>
                    Total response from customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl font-bold">+1502</h1>
                </CardContent>
              </Card>

              {/* response rate  */}
              <Card className="w-[25rem]">
                <CardHeader>
                  <CardTitle>Response Rate</CardTitle>
                  <CardDescription>
                    Response rate from customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl font-bold">80%</h1>
                </CardContent>
              </Card>

              {/* today survey submitted  */}
              <Card className="w-[25rem]">
                <CardHeader>
                  <CardTitle>Today Responses</CardTitle>
                  <CardDescription>Total responses for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl font-bold">20</h1>
                </CardContent>
              </Card>

              {/* today survey submitted  */}
              <Card className="w-[25rem]">
                <CardHeader>
                  <CardTitle>Positive Responses Rate</CardTitle>
                  <CardDescription>
                    Positive responses from customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl font-bold">80%</h1>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-10 w-full mt-5 justify-between border-2">
              <div className="w-[60%] border-2 p-8">
                <h1 className="mb-5 font-bold">Bar graph of responses</h1>
                <Chart />
              </div>
              <div className="w-[40%] p-8">
                <h1 className="font-bold mb-2">Latest Responses</h1>
                <Table className="w-full self-end border-2">
                  <TableCaption>Latest responses.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feedback</TableHead>
                      <TableHead className="text-right">
                        Overall Rating
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Trash Cocomelon</TableCell>
                      <TableCell className="text-right">9/10</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="listing">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
