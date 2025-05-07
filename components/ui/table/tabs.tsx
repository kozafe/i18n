import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TableTabs = () => (
  <Tabs defaultValue="all-trades">
    <TabsList>
      <TabsTrigger value="all-trades">All trades</TabsTrigger>
      <TabsTrigger value="buy-side">Buy side</TabsTrigger>
      <TabsTrigger value="sell-side">Sell side</TabsTrigger>
    </TabsList>
  </Tabs>
);

export default TableTabs;
