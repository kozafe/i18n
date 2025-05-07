"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { getDate, LocaleType } from "./tools";

const getPrice = (amount: number, locale: LocaleType) => {
  const isID = locale === "id";
  const formatter = new Intl.NumberFormat(isID ? "id-ID" : "en-US", {
    style: "currency",
    currency: isID ? "IDR" : "USD",
  });

  return formatter.format(amount);
};

export default function TradeHistoryTable() {
  const t = useTranslations("home");

  const { locale }: { locale: LocaleType } = useParams();

  const trades = [
    {
      id: 1,
      name: "MSFT BUY",
      company: "Microsoft Corp",
      type: "BUY",
      amount: 30021.23,
      date: "Mar 27, 2023",
      status: "processing",
      status_i18n: t("processing"),
    },
    {
      id: 2,
      name: "AAPL SELL",
      company: "Apple Inc.",
      type: "SELL",
      amount: 10045.0,
      date: "Mar 22, 2023",
      status: "success",
      status_i18n: t("success"),
    },
    {
      id: 3,
      name: "NVDA BUY",
      company: "NVIDIA Corp.",
      type: "BUY",
      amount: 40332.19,
      date: "Mar 22, 2023",
      status: "success",
      status_i18n: t("success"),
    },
    {
      id: 4,
      name: "AMZN BUY",
      company: "Amazon.com, Inc.",
      type: "BUY",
      amount: 22665.12,
      date: "Mar 22, 2023",
      status: "declined",
      status_i18n: t("declined"),
    },
    {
      id: 5,
      name: "GOOG BUY",
      company: "Alphabet Inc.",
      type: "BUY",
      amount: 18221.3,
      date: "Mar 11, 2023",
      status: "success",
      status_i18n: t("success"),
    },
    {
      id: 6,
      name: "META SELL",
      company: "Meta Platforms, Inc.",
      type: "SELL",
      amount: 24118.18,
      date: "Mar 11, 2023",
      status: "success",
      status_i18n: t("success"),
    },
  ];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Trade</TableHead>
            <TableHead className="text-right">Order amount</TableHead>
            <TableHead className="text-right">Delivery date</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="font-medium">{trade.name}</div>
                <div className="text-sm text-muted-foreground">
                  {trade.company}
                </div>
              </TableCell>
              <TableCell className="text-right">
                {getPrice(trade.amount, locale)}
              </TableCell>
              <TableCell className="text-right">
                {getDate(locale, new Date(trade.date))}
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={
                    trade.status === "success"
                      ? "outline"
                      : trade.status === "processing"
                      ? "outline"
                      : "destructive"
                  }
                >
                  {trade.status === "success" && "• "}
                  {trade.status === "processing" && "• "}
                  {trade.status === "declined" && "• "}
                  {trade.status_i18n.charAt(0).toUpperCase() +
                    trade.status_i18n.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="link" className="text-violet-600">
                  {t("view")}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <span className="flex h-9 items-center justify-center px-4">
                ...
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
