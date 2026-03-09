"use client"

import { Badge } from "@/components/ui"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui"
import { dailyPerformanceLogData } from "../data/mock-data"

export function DailyPerformanceTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow className="border-b-0 uppercase text-xs text-muted-foreground hover:bg-transparent">
                    <TableHead className="font-semibold whitespace-nowrap min-w-[100px]">DATE</TableHead>
                    <TableHead className="font-semibold text-right sm:text-left whitespace-nowrap min-w-[120px]">TOTAL ORDERS</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap hidden md:table-cell">GMV</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap min-w-[120px]">PLATFORM REV</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap hidden lg:table-cell">ACTIVE STORES</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap hidden lg:table-cell">SUPPLIERS</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap hidden md:table-cell">AOV</TableHead>
                    <TableHead className="font-semibold whitespace-nowrap">FULFILLMENT</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dailyPerformanceLogData.map((log) => (
                    <TableRow key={log.date} className="border-b-0 hover:bg-slate-50">
                        <TableCell className="font-bold py-4 whitespace-nowrap">{log.date}</TableCell>
                        <TableCell className="py-4 text-right sm:text-left">{log.totalOrders}</TableCell>
                        <TableCell className="font-semibold py-4 hidden md:table-cell">${(log.gmv / 1000).toFixed(1)}k</TableCell>
                        <TableCell className="font-semibold text-emerald-500 py-4">${(log.platformRev / 1000).toFixed(2)}k</TableCell>
                        <TableCell className="py-4 hidden lg:table-cell">{log.activeStores}</TableCell>
                        <TableCell className="py-4 hidden lg:table-cell">{log.suppliers}</TableCell>
                        <TableCell className="font-semibold py-4 hidden md:table-cell">${log.aov.toFixed(2)}</TableCell>
                        <TableCell className="py-4">
                            <Badge variant="secondary" className="bg-emerald-100/50 text-emerald-600 hover:bg-emerald-100/50 rounded-md font-semibold px-2">
                                {log.fulfillment}%
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
