"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "#ORD-7829",
    store: "Store New York 1",
    amount: "$93.12",
    status: "Processing",
    time: "2:40",
  },
  {
    id: "#ORD-7830",
    store: "Store Los Angeles 1",
    amount: "$71.46",
    status: "In Transit",
    time: "8:47",
  },
  {
    id: "#ORD-7831",
    store: "Store Chicago 1",
    amount: "$159.96",
    status: "Delivered",
    time: "12:10",
  },
  {
    id: "#ORD-7832",
    store: "Store Houston 1",
    amount: "$51.18",
    status: "In Transit",
    time: "2:44",
  },
  {
    id: "#ORD-7833",
    store: "Store Phoenix 1",
    amount: "$171.74",
    status: "Processing",
    time: "23:31",
  },
]

export function RecentOrdersTable() {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[650px] w-full">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="font-semibold text-xs text-muted-foreground">ORDER ID</TableHead>
            <TableHead className="font-semibold text-xs text-muted-foreground">STORE</TableHead>
            <TableHead className="font-semibold text-xs text-muted-foreground">AMOUNT</TableHead>
            <TableHead className="font-semibold text-xs text-muted-foreground">STATUS</TableHead>
            <TableHead className="font-semibold text-xs text-muted-foreground text-right">TIME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.id} className="border-none hover:bg-slate-50/50">
              <TableCell className="font-medium text-sm">{order.id}</TableCell>
              <TableCell className="text-sm text-foreground/80">{order.store}</TableCell>
              <TableCell className="text-sm font-medium">{order.amount}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`
                  font-medium text-xs px-2.5 py-0.5
                  ${order.status === "Processing" ? "bg-blue-100 text-blue-700 hover:bg-blue-100" : ""}
                  ${order.status === "In Transit" ? "bg-rose-100 text-rose-700 hover:bg-rose-100" : ""}
                  ${order.status === "Delivered" ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100" : ""}
                `}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-sm text-muted-foreground">{order.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
