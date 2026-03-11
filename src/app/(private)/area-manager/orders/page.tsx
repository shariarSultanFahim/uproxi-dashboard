"use client"

import { Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { PageHeader } from "../../admin/components/page-header"
import { AreaManagerOrdersTable } from "./components/orders-table"

export default function AreaManagerOrdersPage() {
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
                        <SelectValue placeholder="Store" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ny1">Store New York 1</SelectItem>
                        <SelectItem value="ny2">Store New York 2</SelectItem>
                        <SelectItem value="la1">Store Los Angeles 1</SelectItem>
                        <SelectItem value="ch1">Store Chicago 1</SelectItem>
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

            {/* Table */}
            <AreaManagerOrdersTable />
        </div>
    )
}
