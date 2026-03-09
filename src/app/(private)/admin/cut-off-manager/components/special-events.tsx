"use client"

import { Calendar, Clock } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { AddEventModal } from "./add-event-modal"
import { toast } from "sonner"

export function SpecialEvents() {

    const handleToggle = (checked: boolean, eventName: string) => {
        console.log(`Event "${eventName}" toggled:`, checked ? "Active" : "Inactive")
        if (checked) {
            toast.success(`${eventName} is now active`)
        } else {
            toast.info(`${eventName} is now inactive`)
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                <div className="flex gap-4">
                    <div className="bg-amber-50 rounded-lg p-3 shrink-0 h-12 w-12 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 leading-tight">Special Event Schedule</h2>
                        <p className="text-sm text-slate-500 mt-1">Set specific cut-off times for upcoming festivals or holidays.</p>
                    </div>
                </div>

                <AddEventModal>
                    <SparkleButton variant="outline" className="shrink-0 h-10 px-4 md:h-10 md:px-6">
                        + Add New Event
                    </SparkleButton>
                </AddEventModal>
            </div>

            <div className="space-y-4">
                {/* Event List Item */}
                <div className="bg-slate-50/50 border rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    {/* Left section - Date and Title */}
                    <div className="flex items-center gap-5">
                        <div className="bg-white border rounded-xl w-16 h-16 flex flex-col items-center justify-center shadow-sm shrink-0">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MAR</span>
                            <span className="text-xl font-bold text-slate-800 leading-none mt-1">10</span>
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-slate-900 leading-tight">Pre-Ramadan Preparation</h3>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="bg-amber-100/50 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                                    Upcoming
                                </span>
                                <span className="text-sm text-slate-500">15 days before start</span>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Time and Toggle */}
                    <div className="flex items-center gap-8 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        <div className="shrink-0">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Special Cut-Off</span>
                            <div className="flex items-center gap-1.5 bg-white border rounded-lg px-3 py-1.5">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-semibold text-slate-800 text-sm">12:00 PM</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1 shrink-0 px-2 border-l pl-6 border-slate-200">
                            <Switch
                                defaultChecked={true}
                                onCheckedChange={(checked) => handleToggle(checked, "Pre-Ramadan Preparation")}
                            />
                            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Active</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
