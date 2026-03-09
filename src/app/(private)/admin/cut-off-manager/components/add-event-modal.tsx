"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AddEventForm } from "./forms/add-event-form"

interface AddEventModalProps {
    children?: React.ReactNode
}

export function AddEventModal({ children }: AddEventModalProps) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-none rounded-2xl shadow-xl flex flex-col max-h-[90dvh]">
                <div className="p-6 pb-2 shrink-0">
                    <DialogHeader className="flex flex-row items-center justify-between space-y-0">
                        <DialogTitle className="text-xl font-bold text-[#1e293b]">Add Special Event Cut off</DialogTitle>
                    </DialogHeader>
                </div>

                <AddEventForm
                    onSuccess={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            </DialogContent>
        </Dialog>
    )
}
