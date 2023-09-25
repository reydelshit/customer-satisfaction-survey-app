import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// components
import Overview from './Overview';
import Rankings from './Rankings';
import Listing from './Listing';
import Cake from './Cake';

export default function AdminTab() {
  return (
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
  );
}
