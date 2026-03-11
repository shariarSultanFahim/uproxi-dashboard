"use client"

import { Calendar, ChevronDown, CheckCircle, Star, AlertTriangle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { PageHeader } from "../../admin/components/page-header"
import { TopSuppliersList } from "../../admin/components/charts/top-suppliers-list"
import { AreaManagerSupplierDirectoryTable } from "./components/supplier-directory-table"

export default function AreaManagerSuppliersPage() {
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

            {/* Filters Row */}
            <div className="flex justify-end gap-3 w-full">
                <Select>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200">
                        <SelectValue placeholder="Supplier" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sup1">Supplier A</SelectItem>
                        <SelectItem value="sup2">Supplier B</SelectItem>
                        <SelectItem value="sup3">Supplier C</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200">
                        <SelectValue placeholder="Area" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="north">North Area</SelectItem>
                        <SelectItem value="south">South Area</SelectItem>
                        <SelectItem value="east">East Area</SelectItem>
                        <SelectItem value="west">West Area</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200">
                        <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="la">Los Angeles</SelectItem>
                        <SelectItem value="chicago">Chicago</SelectItem>
                        <SelectItem value="phoenix">Phoenix</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Main Content Area */}
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2 flex flex-col gap-6 min-w-0">
                    {/* Metrics Row */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="border shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <div className="text-sm font-medium text-muted-foreground">Active Suppliers</div>
                                <div className="p-2 bg-slate-100 rounded-md">
                                    <FileText className="h-4 w-4 text-slate-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold mt-2">45</div>
                            </CardContent>
                        </Card>
                        <Card className="border shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <div className="text-sm font-medium text-muted-foreground">Avg Monthly Orders</div>
                                <div className="p-2 bg-emerald-50 rounded-full">
                                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold mt-2">342</div>
                            </CardContent>
                        </Card>
                        <Card className="border shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <div className="text-sm font-medium text-muted-foreground">On-Time Rate</div>
                                <div className="p-2 bg-amber-50 rounded-md">
                                    <Star className="h-4 w-4 text-amber-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-3xl font-bold">96.8%</div>
                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 font-medium whitespace-nowrap">↗ +1.2%</Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <div className="text-sm font-medium text-muted-foreground">Cancellation Rate</div>
                                <div className="p-2 bg-rose-50 rounded-md">
                                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-3xl font-bold">2.4%</div>
                                    <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-100 font-medium whitespace-nowrap">↘ -0.5%</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <AreaManagerSupplierDirectoryTable />
                </div>
                
                {/* Right Content Area */}
                <div className="min-w-0">
                    <Card className="border shadow-sm flex flex-col sticky top-6">
                        <CardHeader>
                            <CardTitle className="text-base font-semibold">Top Suppliers (On-Time %)</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <TopSuppliersList />
                            <div className="mt-8 pt-4 flex justify-between items-center text-sm text-muted-foreground border-t">
                                <span>Active Suppliers</span>
                                <span className="font-semibold text-foreground">45</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
