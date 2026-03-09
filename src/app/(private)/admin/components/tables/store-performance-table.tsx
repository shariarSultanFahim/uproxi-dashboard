"use client"

import { Badge } from "@/components/ui"
import { Button } from "@/components/ui"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui"
import { MoreHorizontal } from "lucide-react"

import { storePerformanceData } from "../data/mock-data"

export function StorePerformanceTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>STORE NAME</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ORDERS (30D)</TableHead>
                    <TableHead>RETENTION</TableHead>
                    <TableHead>AVG. BASKET</TableHead>
                    <TableHead>LAST ACTIVE</TableHead>
                    <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {storePerformanceData.map((store) => (
                    <TableRow key={store.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-semibold text-sm">
                                    {store.id}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{store.name}</p>
                                    <p className="text-xs text-muted-foreground">{store.zone}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge
                                variant="secondary"
                                className={
                                    store.status === 'Active' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100' :
                                        store.status === 'Risk' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' :
                                            'bg-rose-100 text-rose-800 hover:bg-rose-100'
                                }
                            >
                                {store.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{store.orders}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{store.retention}%</span>
                                <div className="h-1.5 w-12 rounded-full bg-muted overflow-hidden">
                                    <div
                                        className={`h-full ${store.retention > 50 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                                        style={{ width: `${store.retention}%` }}
                                    />
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>${store.avgBasket.toFixed(2)}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{store.lastActive}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
