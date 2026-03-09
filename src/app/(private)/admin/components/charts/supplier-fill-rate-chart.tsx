"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { supplierFillRateData } from "../data/mock-data"

export function SupplierFillRateChart() {
    return (
        <ChartContainer config={{
            fillRate: { label: "Fill Rate", color: "#10b981" },
            stock: { label: "Stock", color: "#38bdf8" }
        }} className="md:h-[250px] w-full">
            <BarChart data={supplierFillRateData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="supplier" axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: 'transparent' }} />
                <Bar dataKey="fillRate" fill="var(--color-fillRate)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="stock" fill="var(--color-stock)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
        </ChartContainer>
    )
}
