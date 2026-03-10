"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddBrandForm } from "./forms/add-brand-form"

export function AddBrandModal() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <SparkleButton className="bg-sky-400 hover:bg-sky-500 text-white shadow-sm shadow-sky-200 gap-2">
                    <Plus className="w-4 h-4" />
                    Add new Brand
                </SparkleButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl p-6 border-0 shadow-xl gap-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-slate-900">Add Brand</DialogTitle>
                </DialogHeader>
                <AddBrandForm
                    onSuccess={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            </DialogContent>
        </Dialog>
    )
}
