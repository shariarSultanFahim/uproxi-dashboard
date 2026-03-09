"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { storeActivityData } from "../data/mock-data"

export function StoreActivityChart() {
    return (
        <div className="flex flex-col items-center justify-center pt-6">
            <ChartContainer config={{
                Active: { label: "Active", color: "#10b981" },
                Inactive: { label: "Inactive", color: "#ef4444" },
                New: { label: "New", color: "#3b82f6" }
            }} className="md:h-[200px] w-full h-[160px]">
                <PieChart>
                    <Pie
                        data={storeActivityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                        stroke="none"
                    >
                        {storeActivityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                </PieChart>
            </ChartContainer>
            <div className="flex gap-4 mt-6">
                {storeActivityData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.fill }} />
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
