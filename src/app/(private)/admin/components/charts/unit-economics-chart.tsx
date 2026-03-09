"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { unitEconomicsData } from "../data/mock-data"

export function UnitEconomicsChart() {
    return (
        <ChartContainer config={{
            cost: { label: "Cost", color: "#cbd5e1" },
            margin: { label: "Margin", color: "#38bdf8" }
        }} className="md:h-[250px] md:w-full">
            <AreaChart data={unitEconomicsData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} tickFormatter={(value) => `$${value / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="cost" stackId="1" stroke="var(--color-cost)" fill="#f8fafc" strokeWidth={2} />
                <Area type="monotone" dataKey="margin" stackId="2" stroke="var(--color-margin)" fill="#e0f2fe" strokeWidth={2} />
            </AreaChart>
        </ChartContainer>
    )
}
