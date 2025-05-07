import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const trades = [
  {
    id: 1,
    name: "MSFT BUY",
    company: "Microsoft Corp",
    type: "BUY",
    amount: "$30,021.23",
    date: "Mar 27, 2023",
    status: "processing",
  },
  {
    id: 2,
    name: "AAPL SELL",
    company: "Apple Inc.",
    type: "SELL",
    amount: "$10,045.00",
    date: "Mar 22, 2023",
    status: "success",
  },
  {
    id: 3,
    name: "NVDA BUY",
    company: "NVIDIA Corp.",
    type: "BUY",
    amount: "$40,332.19",
    date: "Mar 22, 2023",
    status: "success",
  },
  {
    id: 4,
    name: "AMZN BUY",
    company: "Amazon.com, Inc.",
    type: "BUY",
    amount: "$22,665.12",
    date: "Mar 22, 2023",
    status: "declined",
  },
  {
    id: 5,
    name: "GOOG BUY",
    company: "Alphabet Inc.",
    type: "BUY",
    amount: "$18,221.30",
    date: "Mar 11, 2023",
    status: "success",
  },
  {
    id: 6,
    name: "META SELL",
    company: "Meta Platforms, Inc.",
    type: "SELL",
    amount: "$24,118.18",
    date: "Mar 11, 2023",
    status: "success",
  },
]

export default function TradeHistoryTable() {
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
                <div className="text-sm text-muted-foreground">{trade.company}</div>
              </TableCell>
              <TableCell className="text-right">{trade.amount}</TableCell>
              <TableCell className="text-right">{trade.date}</TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={
                    trade.status === "success" ? "success" : trade.status === "processing" ? "outline" : "destructive"
                  }
                >
                  {trade.status === "success" && "• "}
                  {trade.status === "processing" && "• "}
                  {trade.status === "declined" && "• "}
                  {trade.status.charAt(0).toUpperCase() + trade.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="link" className="text-violet-600">
                  View
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
              <span className="flex h-9 items-center justify-center px-4">...</span>
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
  )
}
