import { Label } from '@/components/ui/label';
import Overview from './components/Overview';
import { ToggleTheme } from '@/components/ToggleTheme';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Listing from './components/Listing';
import Rankings from './components/Rankings';
import Cake from './components/Cake';

export default function Admin() {
  return (
    <div className="flex flex-col p-5 md:p-8">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Manager</h1>
          <Label>
            Manage, View Analytics, See Responses, and View Rankings
          </Label>
        </div>

        <ToggleTheme />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="listing">Survey Listing</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="cake">Cake</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="listing">
          <Listing />
        </TabsContent>

        <TabsContent value="rankings">
          <Rankings />
        </TabsContent>

        <TabsContent value="cake">
          <Cake />
        </TabsContent>
      </Tabs>
    </div>
  );
}
