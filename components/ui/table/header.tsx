"use client";

import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

const TableHeader = () => {
  const t = useTranslations("home");
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("tradehistory")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {`View your team's trades and transactions.`}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="hidden md:flex">
          <Download className="mr-2 h-4 w-4" />
          {t("downloadcsv")}
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus className="mr-2 h-4 w-4" />
          {t("add")}
        </Button>
      </div>
    </div>
  );
};
export default TableHeader;
