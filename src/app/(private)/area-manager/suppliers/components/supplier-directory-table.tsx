"use client"

import * as React from "react"

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
import { Truck, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DeleteConfirmationModal } from "../../components/delete-confirmation-modal"
import { toast } from "sonner"

const suppliersData = [
  { id: "1", name: "Supplier A", category: "Produce", status: "Active", activeOrders: 22, onTime: "91.9%" },
  { id: "2", name: "Supplier B", category: "Meat", status: "Active", activeOrders: 39, onTime: "94.3%" },
  { id: "3", name: "Supplier C", category: "Bakery", status: "Active", activeOrders: 16, onTime: "98.7%" },
  { id: "4", name: "Supplier D", category: "Dairy", status: "Active", activeOrders: 11, onTime: "91.5%" },
  { id: "5", name: "Supplier E", category: "Produce", status: "Active", activeOrders: 38, onTime: "94.0%" },
  { id: "6", name: "Supplier F", category: "Beverages", status: "Active", activeOrders: 3, onTime: "93.2%" },
  { id: "7", name: "Supplier G", category: "Meat", status: "Active", activeOrders: 27, onTime: "100.0%" },
  { id: "8", name: "Supplier H", category: "Dairy", status: "Active", activeOrders: 5, onTime: "96.8%" },
  { id: "9", name: "Supplier I", category: "Beverages", status: "Active", activeOrders: 37, onTime: "91.6%" },
  { id: "10", name: "Supplier J", category: "Produce", status: "Active", activeOrders: 26, onTime: "99.5%" },
  { id: "11", name: "Supplier K", category: "Dairy", status: "Active", activeOrders: 7, onTime: "90.7%" },
  { id: "12", name: "Supplier L", category: "Produce", status: "Active", activeOrders: 41, onTime: "90.8%" },
  { id: "13", name: "Supplier M", category: "Dairy", status: "Active", activeOrders: 32, onTime: "98.6%" },
  { id: "14", name: "Supplier N", category: "Dairy", status: "Active", activeOrders: 39, onTime: "92.8%" },
  { id: "15", name: "Supplier O", category: "Bakery", status: "Active", activeOrders: 12, onTime: "92.0%" },
  { id: "16", name: "Supplier P", category: "Produce", status: "Paused", activeOrders: 46, onTime: "93.8%" },
  { id: "17", name: "Supplier Q", category: "Produce", status: "Active", activeOrders: 36, onTime: "94.3%" },
  { id: "18", name: "Supplier R", category: "Produce", status: "Active", activeOrders: 41, onTime: "92.0%" },
  { id: "19", name: "Supplier S", category: "Dairy", status: "Paused", activeOrders: 10, onTime: "90.0%" },
  { id: "20", name: "Supplier T", category: "Dairy", status: "Active", activeOrders: 42, onTime: "95.3%" },
]

export function AreaManagerSupplierDirectoryTable() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const rowsPerPage = 10

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = suppliersData.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = Math.ceil(suppliersData.length / rowsPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handleDelete = (supplierName: string) => {
    console.log(`Deleting supplier: ${supplierName}`)
    toast.success(`${supplierName} deleted successfully!`)
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="border-b pb-4">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <Truck className="h-5 w-5 text-emerald-500" />
          Supplier Directory
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[600px] w-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">SUPPLIER NAME</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">CATEGORY</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">STATUS</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">ACTIVE ORDERS</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12">ON-TIME %</TableHead>
                <TableHead className="font-semibold text-xs px-4 text-muted-foreground h-12 text-right">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((supplier) => (
                <TableRow key={supplier.id} className="border-b hover:bg-slate-50/50">
                  <TableCell className="px-4 py-2 font-medium text-sm text-foreground">
                    {supplier.name}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm text-muted-foreground">
                    {supplier.category}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Badge
                      variant="secondary"
                      className={`
                        font-medium text-xs px-2.5 py-0.5 border-none
                        ${supplier.status === "Active" ? "bg-emerald-50 text-emerald-500 hover:bg-emerald-100" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}
                      `}
                    >
                      {supplier.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm text-foreground">
                    {supplier.activeOrders}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm text-foreground">
                    {supplier.onTime}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-right">
                    <DeleteConfirmationModal
                      itemName={supplier.name}
                      itemType="supplier"
                      onConfirm={() => handleDelete(supplier.name)}
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
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, suppliersData.length)} of {suppliersData.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 h-8 px-3 text-muted-foreground"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 h-8 px-3 text-muted-foreground"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
