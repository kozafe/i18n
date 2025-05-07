"use client";
import { getDate, LocaleType } from "@/components/tools";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const TableFilters = () => {
  const t = useTranslations("home");
  const { locale }: { locale: LocaleType } = useParams();
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:w-80">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search for trades" className="pl-8" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button variant="outline" className="justify-between">
          <Calendar className="mr-2 h-4 w-4" />
          {getDate(locale, new Date("Mar 7, 2023"))} -{" "}
          {getDate(locale, new Date("Mar 28, 2023"))}
        </Button>
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {t("filters")}
        </Button>
      </div>
    </div>
  );
};

export default TableFilters;
