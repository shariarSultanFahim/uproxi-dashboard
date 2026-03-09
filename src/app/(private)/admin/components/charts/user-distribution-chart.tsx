"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui"
import { userDistributionData } from "../data/mock-data"

export function UserDistributionChart() {
    return (
        <div className="flex flex-col items-center justify-center pt-2">
            <ChartContainer config={{
                Consumers: { label: "Consumers", color: "#38bdf8" },
                Suppliers: { label: "Suppliers", color: "#cbd5e1" }
            }} className="min-h-[200px] sm:min-h-[220px] w-full max-w-[220px] mx-auto">
                <PieChart>
                    <Pie
                        data={userDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                        stroke="none"
                        cornerRadius={5}
                    >
                        {userDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                </PieChart>
            </ChartContainer>
            <div className="flex flex-col w-full gap-2 mt-4">
                {userDistributionData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                            <span className="text-muted-foreground">{item.name}</span>
                        </div>
                        <span className="font-semibold">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
