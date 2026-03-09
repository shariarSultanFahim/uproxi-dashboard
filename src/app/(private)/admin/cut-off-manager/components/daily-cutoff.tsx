"use client"

import { Clock } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function DailyCutoff() {
    const [selectedDays, setSelectedDays] = useState<string[]>(["Mon", "Tue", "Wed", "Thu", "Fri"])

    const toggleDay = (day: string) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        )
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">

                <div className="flex gap-4">
                    <div className="bg-sky-50 rounded-lg p-3 shrink-0 h-12 w-12 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 leading-tight">Daily Cut-Off Time</h2>
                        <p className="text-sm text-slate-500 mt-1">Orders placed after this time move to next day</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 border rounded-lg px-4 py-2.5 h-12">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-slate-800">12:00 PM</span>
                </div>
            </div>

            <div>
                <h3 className="text-xs font-semibold text-slate-400 tracking-wider mb-3 uppercase">Active Days</h3>
                <div className="flex flex-wrap gap-3">
                    {DAYS.map((day) => {
                        const isActive = selectedDays.includes(day)
                        return (
                            <button
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={cn(
                                    "px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border",
                                    isActive
                                        ? "bg-sky-50 border-sky-300 text-sky-500 hover:bg-sky-100/80"
                                        : "bg-slate-50/50 border-transparent text-slate-400 hover:bg-slate-100"
                                )}
                            >
                                {day}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
