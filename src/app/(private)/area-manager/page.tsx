"use client"

import { Calendar, ChevronDown, Store, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { OrderFrequencyChart } from "../admin/components/charts/order-frequency-chart"
import { TopSuppliersList } from "../admin/components/charts/top-suppliers-list"
import { StoreActivityChart } from "../admin/components/charts/store-activity-chart"
import { PageHeader } from "../admin/components/page-header"

import { RecentOrdersTable } from "./components/recent-orders-table"

export default function AreaManagerDashboardPage() {
    return (
        <div className="flex flex-col gap-6 w-full min-w-0">
            <PageHeader
                title="Store Overview"
                description=""
            >
                <Button variant="outline" className="gap-2 bg-white">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Last 7 Days
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
            </PageHeader>

            {/* Metrics Row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium text-muted-foreground">Total Stores</div>
                        <div className="p-2 bg-slate-100 rounded-md">
                            <Store className="h-4 w-4 text-slate-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mt-2">142</div>
                    </CardContent>
                </Card>
                <Card className="border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium text-muted-foreground">Active Stores</div>
                        <div className="p-2 bg-emerald-50 rounded-full">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="text-3xl font-bold">118</div>
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 font-medium">↗ +4%</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">≥1 order last 7 days</p>
                    </CardContent>
                </Card>
                <Card className="border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium text-muted-foreground">Inactive Stores</div>
                        <div className="p-2 bg-amber-50 rounded-full">
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mt-2">12</div>
                        <p className="text-xs text-muted-foreground mt-2">0 orders last 14 days</p>
                    </CardContent>
                </Card>
                <Card className="border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium text-muted-foreground">New Stores</div>
                        <div className="p-2 bg-blue-50 rounded-md">
                            <Store className="h-4 w-4 text-blue-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mt-2">12</div>
                        <p className="text-xs text-muted-foreground mt-2">Onboarded this period</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Orders Trend</CardTitle>
                    </CardHeader>
                    <CardContent className="h-full min-h-[300px]">
                        <OrderFrequencyChart />
                    </CardContent>
                </Card>
                <Card className="border shadow-sm space-y-10">
                    <div>
                        <CardHeader>
                            <CardTitle className="text-base font-semibold">Top Suppliers (On-Time %)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TopSuppliersList />
                        </CardContent>
                    </div>
                    <div className="px-6 pb-6 pt-4 flex justify-between items-center text-sm text-muted-foreground mt-auto">
                        <span>Active Suppliers</span>
                        <span className="font-semibold text-foreground">45</span>
                    </div>
                </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 border shadow-sm min-w-0">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
                        <Button variant="link" className="text-emerald-500 font-medium px-0">View All</Button>
                    </CardHeader>
                    <CardContent className="p-0 sm:p-6 sm:pt-0">
                        <RecentOrdersTable />
                    </CardContent>
                </Card>
                <Card className="border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Store Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-8">
                        <StoreActivityChart />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
