"use client"

import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { salesAnalyticsData } from "../data/mock-data"

export function SalesAnalyticsChart() {
    return (
        <ChartContainer config={{ value: { label: "Sales", color: "#f1f5f9" } }} className="md:h-[250px] md:w-full">
            <BarChart data={salesAnalyticsData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} tickFormatter={(value) => `$${value / 1000}k`} />
                <ChartTooltip cursor={{ fill: 'transparent' }} content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" radius={[8, 8, 8, 8]} maxBarSize={32}>
                    {salesAnalyticsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.month === 'May' ? '#38bdf8' : '#f1f5f9'} />
                    ))}
                </Bar>
            </BarChart>
        </ChartContainer>
    )
}
