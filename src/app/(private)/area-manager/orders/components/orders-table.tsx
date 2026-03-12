"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Download, Printer, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OrderDetailsModal } from "./order-details-modal"

const ordersData = [
  { id: "#ORD-7829", date: "2/2/2026", time: "2:40", customer: "Customer 1", store: "Store New York 1", amount: 93.12, status: "Processing" },
  { id: "#ORD-7830", date: "1/27/2026", time: "8:47", customer: "Customer 2", store: "Store Los Angeles 1", amount: 71.46, status: "In Transit" },
  { id: "#ORD-7831", date: "1/30/2026", time: "12:10", customer: "Customer 3", store: "Store Chicago 1", amount: 159.96, status: "Delivered" },
  { id: "#ORD-7832", date: "2/6/2026", time: "2:44", customer: "Customer 4", store: "Store Houston 1", amount: 51.18, status: "In Transit" },
  { id: "#ORD-7833", date: "1/28/2026", time: "23:31", customer: "Customer 5", store: "Store Phoenix 1", amount: 171.74, status: "Processing" },
  { id: "#ORD-7834", date: "2/4/2026", time: "9:20", customer: "Customer 6", store: "Store New York 2", amount: 124.37, status: "Delivered" },
  { id: "#ORD-7835", date: "2/2/2026", time: "23:09", customer: "Customer 7", store: "Store Los Angeles 2", amount: 138.10, status: "Cancelled" },
  { id: "#ORD-7836", date: "2/5/2026", time: "11:08", customer: "Customer 8", store: "Store Chicago 2", amount: 114.23, status: "In Transit" },
  { id: "#ORD-7837", date: "1/29/2026", time: "16:57", customer: "Customer 9", store: "Store Houston 2", amount: 173.95, status: "Processing" },
  { id: "#ORD-7838", date: "2/7/2026", time: "21:29", customer: "Customer 10", store: "Store Phoenix 2", amount: 205.56, status: "Delivered" },
]

export function AreaManagerOrdersTable() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="border-b pb-4 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <ShoppingCart className="h-5 w-5 text-emerald-500" />
          All Orders (50)
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2 text-muted-foreground border-slate-200">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2 text-muted-foreground border-slate-200">
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[1000px] w-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">ORDER ID</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">DATE & TIME</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">CUSTOMER</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">STORE</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">AMOUNT</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">STATUS</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12 text-right">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id} className="border-b hover:bg-slate-50/50">
                  <TableCell className="px-4 py-2 font-medium text-sm text-emerald-500">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-sm text-foreground">{order.date}</span>
                      <span className="text-xs text-muted-foreground">{order.time}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-x px-4 text-sm text-muted-foreground">
                    {order.customer}
                  </TableCell>
                  <TableCell className="py-x px-4 text-sm text-muted-foreground">
                    {order.store}
                  </TableCell>
                  <TableCell className="py-x px-4 font-medium text-sm text-foreground">
                    ${order.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="py-x px-4">
                    <Badge
                      variant="secondary"
                      className={`
                        font-medium text-xs px-2.5 py-0.5 border-none
                        ${order.status === "Processing" ? "bg-blue-50 text-blue-500 hover:bg-blue-100" : ""}
                        ${order.status === "In Transit" ? "bg-amber-50 text-amber-500 hover:bg-amber-100" : ""}
                        ${order.status === "Delivered" ? "bg-emerald-50 text-emerald-500 hover:bg-emerald-100" : ""}
                        ${order.status === "Cancelled" ? "bg-rose-50 text-rose-500 hover:bg-rose-100" : ""}
                      `}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-x px-4 text-right">
                    <div className="flex justify-end gap-1">
                      <OrderDetailsModal order={order}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </OrderDetailsModal>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing 1 to 10 of 50 entries
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 border-slate-200 text-muted-foreground">Previous</Button>
            <Button variant="outline" size="sm" className="h-8 border-slate-200 text-muted-foreground">Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
