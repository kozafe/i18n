import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Settings,
  Bell,
  Download,
  Plus,
  Calendar,
  SlidersHorizontal,
} from "lucide-react";
import TradeHistoryTable from "@/components/trade-history-table";
import MainNavigation from "@/components/main-navigation";
import SubNavigation from "@/components/sub-navigation";
import LanguageSelector from "@/components/language-selector";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <MainNavigation />
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="px-4 md:px-6">
        <SubNavigation />
        <main className="py-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Trade history
                </h1>
                <p className="text-sm text-muted-foreground">
                  View your team's trades and transactions.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="hidden md:flex">
                  <Download className="mr-2 h-4 w-4" />
                  Download CSV
                </Button>
                <Button className="bg-violet-600 hover:bg-violet-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Tabs defaultValue="all-trades">
                <TabsList>
                  <TabsTrigger value="all-trades">All trades</TabsTrigger>
                  <TabsTrigger value="buy-side">Buy side</TabsTrigger>
                  <TabsTrigger value="sell-side">Sell side</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for trades"
                    className="pl-8"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button variant="outline" className="justify-between">
                    <Calendar className="mr-2 h-4 w-4" />
                    Mar 7, 2023 - Mar 28, 2023
                  </Button>
                  <Button variant="outline">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>
              <Card>
                <TradeHistoryTable />
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
