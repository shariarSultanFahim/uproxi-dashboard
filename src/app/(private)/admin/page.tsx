"use client"

import { Calendar, ChevronDown, DollarSign, Store, Truck } from "lucide-react"

import { Button } from "@/components/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "./components/page-header"

import { StoreEngagementTab } from "./components/store-engagement-tab"
import { SupplierPerformanceTab } from "./components/supplier-performance-tab"
import { FinanceTab } from "./components/finance-tab"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <PageHeader
        title="Performance Analytics"
        description="Comprehensive metrics for stores, suppliers, finance, and operations."
      >
        <Button variant="outline" className="gap-2 bg-white">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          Last 7 Days
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PageHeader>

      <Tabs defaultValue="store" className="w-full">
        <TabsList className="bg-slate-100/50 p-1 mb-6 flex space-x-2 w-max sm:w-fit overflow-x-auto overflow-y-hidden max-w-full justify-start whitespace-nowrap">
          <TabsTrigger value="store" className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Store className="h-4 w-4" />
            Store Engagement
          </TabsTrigger>
          <TabsTrigger value="supplier" className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Truck className="h-4 w-4" />
            Supplier Performance
          </TabsTrigger>
          <TabsTrigger value="finance" className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <DollarSign className="h-4 w-4" />
            Finance & Unit Econ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="store" className="mt-0">
          <StoreEngagementTab />
        </TabsContent>

        <TabsContent value="supplier" className="mt-0">
          <SupplierPerformanceTab />
        </TabsContent>

        <TabsContent value="finance" className="mt-0">
          <FinanceTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
