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
import { AreaManagerStoresTable } from "./components/stores-table"

export default function AreaManagerStoresPage() {
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
                        <SelectItem value="phoenix">Phoenix</SelectItem>
                        <SelectItem value="tucson">Tucson</SelectItem>
                        <SelectItem value="mesa">Mesa</SelectItem>
                        <SelectItem value="chandler">Chandler</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Table */}
            <AreaManagerStoresTable />
        </div>
    )
}
