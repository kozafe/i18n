import LanguageSelector from "@/components/language-selector";
import MainNavigation from "@/components/main-navigation";
import SubNavigation from "@/components/sub-navigation";
import TradeHistoryTable from "@/components/trade-history-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TableFilters from "@/components/ui/table/filter";
import TableHeader from "@/components/ui/table/header";
import TableTabs from "@/components/ui/table/tabs";
import {
  Bell,
  Calendar,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

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
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <div className="px-4 md:px-6">
        <SubNavigation />
        <main className="py-6">
          <div className="flex flex-col gap-6">
            <TableHeader />
            <div className="flex flex-col gap-4">
              <TableTabs />
              <TableFilters />
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
