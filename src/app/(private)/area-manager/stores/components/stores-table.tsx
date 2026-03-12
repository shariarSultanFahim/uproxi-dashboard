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
import { MapPin, Store, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DeleteConfirmationModal } from "../../components/delete-confirmation-modal"
import { toast } from "sonner"

const storesData = [
  { id: "S1004", name: "Store Phoenix 1", location: "Phoenix, Central", status: "Active", monthlyOrders: 70, revenue: 12479.17, lastOrder: "2 hours ago" },
  { id: "S1009", name: "Store Phoenix 2", location: "Phoenix, Central", status: "Active", monthlyOrders: 9, revenue: 29520.93, lastOrder: "2 hours ago" },
  { id: "S1014", name: "Store Phoenix 3", location: "Phoenix, Central", status: "Active", monthlyOrders: 374, revenue: 38399.18, lastOrder: "2 hours ago" },
  { id: "S1019", name: "Store Phoenix 4", location: "Phoenix, Central", status: "Active", monthlyOrders: 214, revenue: 5986.31, lastOrder: "2 hours ago" },
  { id: "S1024", name: "Store Phoenix 5", location: "Phoenix, Central", status: "Active", monthlyOrders: 177, revenue: 44705.64, lastOrder: "2 hours ago" },
  { id: "S1029", name: "Store Phoenix 6", location: "Phoenix, Central", status: "Active", monthlyOrders: 429, revenue: 11522.37, lastOrder: "2 hours ago" },
  { id: "S1034", name: "Store Phoenix 7", location: "Phoenix, Central", status: "Active", monthlyOrders: 250, revenue: 49175.87, lastOrder: "2 hours ago" },
  { id: "S1039", name: "Store Phoenix 8", location: "Phoenix, Central", status: "Active", monthlyOrders: 350, revenue: 15988.84, lastOrder: "2 hours ago" },
  { id: "S1044", name: "Store Phoenix 9", location: "Phoenix, Central", status: "Active", monthlyOrders: 255, revenue: 10367.13, lastOrder: "2 hours ago" },
  { id: "S1049", name: "Store Phoenix 10", location: "Phoenix, Central", status: "Inactive", monthlyOrders: 75, revenue: 20545.60, lastOrder: "15 days ago" },
]

export function AreaManagerStoresTable() {
  const handleDelete = (storeName: string) => {
    console.log(`Deleting store: ${storeName}`)
    toast.success(`${storeName} deleted successfully!`)
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="border-b pb-4">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <Store className="h-5 w-5 text-sky-500" />
          All Stores (10)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[1000px] w-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">LOCATION</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">STATUS</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">MONTHLY ORDERS</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">REVENUE</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">LAST ORDER</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">STORE NAME</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12 text-right">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {storesData.map((store) => (
                <TableRow key={store.id} className="border-b hover:bg-slate-50/50">
                  <TableCell className="px-4 py-2">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-sm text-foreground">{store.name}</span>
                      <span className="text-xs text-muted-foreground">ID: {store.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {store.location}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Badge
                      variant="secondary"
                      className={`
                        font-medium text-xs px-2.5 py-0.5 border-none bg-sky-50
                        ${store.status === "Active" ? "text-sky-500 hover:bg-sky-50" : "text-muted-foreground hover:bg-slate-100"}
                      `}
                    >
                      <div className={`h-1.5 w-1.5 rounded-full mr-2 ${store.status === "Active" ? "bg-sky-500" : "bg-muted-foreground"}`} />
                      {store.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm text-muted-foreground">{store.monthlyOrders}</TableCell>
                  <TableCell className="px-4 py-2 font-medium text-sm text-foreground">
                    ${store.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm text-muted-foreground">{store.lastOrder}</TableCell>
                  <TableCell className="px-4 py-2 text-right">
                    <DeleteConfirmationModal
                      itemName={store.name}
                      itemType="store"
                      onConfirm={() => handleDelete(store.name)}
                    >
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </DeleteConfirmationModal>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing 1 to 10 of 10 entries
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
