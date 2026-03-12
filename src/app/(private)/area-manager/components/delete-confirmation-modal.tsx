"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface DeleteConfirmationModalProps {
  children: React.ReactNode
  onConfirm: () => void
  itemName: string
  itemType: string
}

export function DeleteConfirmationModal({
  children,
  onConfirm,
  itemName,
  itemType,
}: DeleteConfirmationModalProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirm()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[400px] rounded-2xl p-6 bg-white border-none shadow-2xl">
        <DialogHeader className="flex flex-col items-center gap-4 text-center">
          <div className="h-12 w-12 rounded-full bg-rose-50 flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-rose-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-[#1e293b]">Confirm Delete</DialogTitle>
          <DialogDescription className="text-slate-500 font-medium">
            Are you sure you want to delete <span className="font-bold text-[#1e293b]">{itemName}</span> from the {itemType} list? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-3 mt-4">
          <DialogClose asChild>
            <Button variant="outline" className="flex-1 rounded-xl h-11 border-slate-200 text-slate-600 font-semibold">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            className="flex-1 rounded-xl h-11 bg-rose-500 hover:bg-rose-600 text-white font-semibold"
            onClick={handleConfirm}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
