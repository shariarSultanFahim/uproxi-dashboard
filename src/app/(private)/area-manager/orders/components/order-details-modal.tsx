"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Download, X } from "lucide-react"

interface OrderItem {
  id: string
  name: string
  quantity: number
  unitPrice: number
  total: number
}

interface OrderDetailsModalProps {
  children: React.ReactNode
  order: {
    id: string
    date: string
    time: string
    customer: string
    store: string
    amount: number
  }
}

const mockItems: OrderItem[] = [
  { id: "1", name: "Wireless Headphones", quantity: 2, unitPrice: 45.99, total: 91.98 },
  { id: "2", name: "USB Cable", quantity: 1, unitPrice: 1.14, total: 1.14 },
]

export function OrderDetailsModal({ children, order }: OrderDetailsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white rounded-2xl p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="px-6 py-5 flex flex-row items-center justify-between border-b">
          <div className="flex flex-col gap-1">
            <DialogTitle className="text-xl font-bold text-[#1e293b]">Order Items</DialogTitle>
            <p className="text-sm text-slate-400 font-medium">
              {order.id} • {order.date} at {order.time}
            </p>
          </div>
        </DialogHeader>

        <div className="p-6 flex flex-col gap-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CUSTOMER</span>
              <p className="text-sm font-bold text-[#1e293b] mt-1">{order.customer}</p>
            </div>
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">STORE</span>
              <p className="text-sm font-bold text-[#1e293b] mt-1">{order.store}</p>
            </div>
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL AMOUNT</span>
              <p className="text-lg font-bold text-[#1e293b] mt-1">${order.amount.toFixed(2)}</p>
            </div>
          </div>

          {/* Items Table Container */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    ORDER ITEMS ({mockItems.length})
                </span>
             </div>
             <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-slate-100">
                        <TableHead className="font-bold text-[10px] text-slate-400 h-10 uppercase">ITEM</TableHead>
                        <TableHead className="font-bold text-[10px] text-slate-400 h-10 uppercase text-center">QUANTITY</TableHead>
                        <TableHead className="font-bold text-[10px] text-slate-400 h-10 uppercase text-center">UNIT PRICE</TableHead>
                        <TableHead className="font-bold text-[10px] text-slate-400 h-10 uppercase text-right">TOTAL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockItems.map((item) => (
                        <TableRow key={item.id} className="border-slate-50 hover:bg-slate-50/30">
                            <TableCell className="py-4 text-xs font-semibold text-slate-600">{item.name}</TableCell>
                            <TableCell className="py-4 text-xs font-semibold text-slate-600 text-center">{item.quantity}</TableCell>
                            <TableCell className="py-4 text-xs font-semibold text-slate-600 text-center">${item.unitPrice.toFixed(2)}</TableCell>
                            <TableCell className="py-4 text-xs font-bold text-[#1e293b] text-right">${item.total.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="bg-slate-50/50 hover:bg-slate-50/50 font-bold border-none">
                        <TableCell colSpan={3} className="py-4 text-sm text-right text-slate-600">Order Total:</TableCell>
                        <TableCell className="py-4 text-sm text-right text-[#1e293b]">${order.amount.toFixed(2)}</TableCell>
                    </TableRow>
                </TableBody>
             </Table>
          </div>
        </div>

        <div className="px-6 py-4 flex justify-between items-center bg-white border-t">
          <Button className="bg-[#059669] hover:bg-[#047857] text-white gap-2 font-semibold h-11 px-6 rounded-lg text-xs">
            <Download className="h-4 w-4" />
            Download Order List
          </Button>
          <DialogClose asChild>
            <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold h-11 px-8 rounded-lg text-xs">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
