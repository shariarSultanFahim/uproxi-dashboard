"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui"
import { Badge } from "@/components/ui"
import { DollarSign, Activity, Wallet, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui"

import { SalesAnalyticsChart } from "./charts/sales-analytics-chart"
import { UserDistributionChart } from "./charts/user-distribution-chart"
import { UnitEconomicsChart } from "./charts/unit-economics-chart"
import { DailyPerformanceTable } from "./tables/daily-performance-table"

export function FinanceTab() {
    return (
        <div className="flex flex-col gap-6">
            {/* Metrics Row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="bg-emerald-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-emerald-100 rounded-md bg-white border border-emerald-200">
                            <DollarSign className="h-4 w-4 text-emerald-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-emerald-900/70 mb-1 uppercase">Revenue / Order</div>
                        <div className="text-2xl font-bold text-emerald-950">$42.50</div>
                        <p className="text-xs text-emerald-900/70 mt-1">Gross Revenue</p>
                    </CardContent>
                </Card>

                <Card className="bg-indigo-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-indigo-100 rounded-md bg-white border border-indigo-200">
                            <DollarSign className="h-4 w-4 text-indigo-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-indigo-900/70 mb-1 uppercase">Cost / Order</div>
                        <div className="text-2xl font-bold text-indigo-950">$35.20</div>
                        <p className="text-xs text-indigo-900/70 mt-1">COGS + Logistics</p>
                    </CardContent>
                </Card>

                <Card className="bg-sky-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-sky-100 rounded-md bg-white border border-sky-200">
                            <Activity className="h-4 w-4 text-sky-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-sky-900/70 mb-1 uppercase">Gross Margin</div>
                        <div className="text-2xl font-bold text-sky-950">18.5%</div>
                        <p className="text-xs text-sky-900/70 mt-1">Contribution Margin</p>
                    </CardContent>
                </Card>

                <Card className="bg-amber-50 border-none shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="p-2 bg-amber-100 rounded-md bg-white border border-amber-200">
                            <Wallet className="h-4 w-4 text-amber-700" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs font-semibold text-amber-900/70 mb-1 uppercase">Net Revenue</div>
                        <div className="text-2xl font-bold text-amber-950">$48,500</div>
                        <p className="text-xs text-amber-900/70 mt-1">Comm + Fees Earned</p>
                    </CardContent>
                </Card>
            </div>

            {/* Analytics & Distribution Row */}
            <div className="grid gap-4 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between pb-8">
                        <div>
                            <CardTitle>Sales Analytics</CardTitle>
                            <div className="text-2xl font-bold mt-1 tracking-tight">$46,650 <span className="text-xs font-normal text-muted-foreground ml-1">total this week</span></div>
                        </div>
                        <div className="flex bg-muted rounded-md p-1 space-x-1">
                            <Button variant="outline" size="sm" className="h-8 shadow-sm">
                                <Activity className="h-4 w-4 text-sky-500" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 shadow-sm gap-2">
                                July-Dec <ChevronDown className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 shadow-sm gap-2">
                                Filter by <ChevronDown className="h-3 w-3" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <SalesAnalyticsChart />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>User Distribution</CardTitle>
                        <Button variant="outline" size="icon" className="h-8 w-8 text-sky-500">
                            <Users className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center pt-2">
                        <UserDistributionChart />
                    </CardContent>
                </Card>
            </div>

            {/* Trends Row */}
            <Card>
                <CardHeader className="flex flex-row flex-wrap items-center justify-between pb-8">
                    <CardTitle>Unit Economics Trends</CardTitle>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-slate-300" /> Cost
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-sky-400" /> Margin
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <UnitEconomicsChart />
                </CardContent>
            </Card>

            {/* Table Row */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Daily Performance Log</CardTitle>
                        <CardDescription className="uppercase text-xs font-semibold tracking-wider mt-1">Consolidated Metrics</CardDescription>
                    </div>
                    <Button variant="link" className="text-indigo-600 font-semibold text-sm">View All History</Button>
                </CardHeader>
                <CardContent>
                    <DailyPerformanceTable />
                </CardContent>
            </Card>
        </div>
    )
}
