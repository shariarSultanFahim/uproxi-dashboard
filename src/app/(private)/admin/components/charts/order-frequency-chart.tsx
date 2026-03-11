"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { orderFrequencyData } from "../data/mock-data"

export function OrderFrequencyChart() {
    return (
        <ChartContainer config={{ orders: { label: "Orders", color: "#38bdf8" } }} className="lg:h-[250px] lg:w-full">
            <LineChart data={orderFrequencyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={(value) => value.slice(0, 3)} style={{ fontSize: '12px', fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#6B7280' }} />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <Line type="monotone" dataKey="orders" stroke="var(--color-orders)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
        </ChartContainer>
    )
}
