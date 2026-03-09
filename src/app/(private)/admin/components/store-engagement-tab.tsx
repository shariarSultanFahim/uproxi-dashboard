"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui"
import { Badge } from "@/components/ui"
import { Input } from "@/components/ui"
import { OrderFrequencyChart } from "./charts/order-frequency-chart"
import { StoreActivityChart } from "./charts/store-activity-chart"
import { StorePerformanceTable } from "./tables/store-performance-table"
import { Store, ShoppingBag, Users, AlertCircle, Search } from "lucide-react"

import { Button } from "@/components/ui"

export function StoreEngagementTab() {
    return (
        <div className="flex flex-col gap-6">
            {/* Metrics Row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="bg-green-100 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-green-200 rounded-md">
                            <Store className="h-4 w-4 text-green-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-green-800/80 mb-1">ACTIVE STORES</div>
                        <div className="text-2xl font-bold text-green-950">158</div>
                        <p className="text-xs text-green-800/80 mt-1">Stores active today</p>
                    </CardContent>
                </Card>
                <Card className="bg-sky-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-sky-100 rounded-md">
                            <ShoppingBag className="h-4 w-4 text-sky-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-sky-800/80 mb-1">AVG. BASKET SIZE</div>
                        <div className="text-2xl font-bold text-sky-950">$425.50</div>
                        <p className="text-xs text-sky-800/80 mt-1">Per order average</p>
                    </CardContent>
                </Card>
                <Card className="bg-yellow-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-yellow-100 rounded-md">
                            <Users className="h-4 w-4 text-yellow-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-yellow-800/80 mb-1">RETENTION (7D)</div>
                        <div className="text-2xl font-bold text-yellow-950">88.5%</div>
                        <p className="text-xs text-yellow-800/80 mt-1">Returning stores</p>
                    </CardContent>
                </Card>
                <Card className="bg-rose-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-rose-100 rounded-md">
                            <AlertCircle className="h-4 w-4 text-rose-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-rose-800/80 mb-1">CHURN RISK</div>
                        <div className="text-2xl font-bold text-rose-950">5</div>
                        <p className="text-xs text-rose-800/80 mt-1">Inactive {'>'} 14 days</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Order Frequency</CardTitle>
                            <CardDescription>Average orders per store over time</CardDescription>
                        </div>
                        <div className="flex bg-muted rounded-md p-1">
                            <Button variant="ghost" size="sm" className="bg-background shadow-sm h-7 text-xs px-3">Daily</Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs px-3 text-muted-foreground">Weekly</Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs px-3 text-muted-foreground">Monthly</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                        <OrderFrequencyChart />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Store Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center pt-6">
                        <StoreActivityChart />
                    </CardContent>
                </Card>
            </div>

            {/* Table Row */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Store Performance Details</CardTitle>
                    <div className="relative w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search stores..." className="pl-8 bg-muted/50 border-none" />
                    </div>
                </CardHeader>
                <CardContent>
                    <StorePerformanceTable />
                    <div className="pt-6 text-center">
                        <Button variant="link" className="text-sky-500 font-medium">View All Stores ↗</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
