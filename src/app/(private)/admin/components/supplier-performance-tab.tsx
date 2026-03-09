"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui"
import { Store, CheckCircle, PackageCheck } from "lucide-react"
import { SupplierFillRateChart } from "./charts/supplier-fill-rate-chart"
import { TopSuppliersList } from "./charts/top-suppliers-list"

export function SupplierPerformanceTab() {
    return (
        <div className="flex flex-col gap-6">
            {/* Metrics Row */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-indigo-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-indigo-100 rounded-md bg-white border">
                            <Store className="h-4 w-4 text-indigo-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-indigo-900/70 mb-1">ACTIVE SUPPLIERS</div>
                        <div className="text-2xl font-bold text-indigo-950">42</div>
                        <p className="text-xs text-indigo-900/70 mt-1">Last 7 Days</p>
                    </CardContent>
                </Card>

                <Card className="bg-amber-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-amber-100 rounded-md bg-white border border-amber-200">
                            <CheckCircle className="h-4 w-4 text-amber-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-amber-900/70 mb-1">FILL RATE</div>
                        <div className="text-2xl font-bold text-amber-950">94.2%</div>
                        <p className="text-xs text-amber-900/70 mt-1">Orders Fulfilled Fully</p>
                    </CardContent>
                </Card>

                <Card className="bg-emerald-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-emerald-100 rounded-md bg-white border border-emerald-200">
                            <PackageCheck className="h-4 w-4 text-emerald-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-emerald-900/70 mb-1">BULK UNLOCK RATE</div>
                        <div className="text-2xl font-bold text-emerald-950">98.5%</div>
                        <p className="text-xs text-emerald-900/70 mt-1">Successful Batches</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chart Row */}
            <Card>
                <CardHeader className="flex flex-row flex-wrap items-center justify-between pb-8">
                    <CardTitle>Supplier Fill Rate & Stock Performance</CardTitle>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" /> Fill Rate
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-sky-400" /> Stock
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <SupplierFillRateChart />
                </CardContent>
            </Card>

            {/* Top Suppliers Row */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Top Suppliers (On-Time %)</CardTitle>
                </CardHeader>
                <CardContent>
                    <TopSuppliersList />
                    <div className="mt-8 flex justify-between items-center text-sm text-muted-foreground pt-4 border-t">
                        <span>Active Suppliers</span>
                        <span className="font-semibold text-foreground">45</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
