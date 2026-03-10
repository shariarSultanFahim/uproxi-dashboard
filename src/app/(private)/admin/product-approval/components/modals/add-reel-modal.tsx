"use client"

import { ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UploadCloud } from "lucide-react"

interface AddReelModalProps {
    children: ReactNode
}

export function AddReelModal({ children }: AddReelModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0 rounded-3xl overflow-hidden border-0 shadow-2xl">
                <div className="p-6">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-xl font-bold text-slate-800">Add Reel</DialogTitle>
                    </DialogHeader>

                    {/* Upload Area */}
                    <div className="border border-dashed border-sky-300 bg-sky-50/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sky-50 transition-colors mb-6 group">
                        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                            <UploadCloud className="w-6 h-6 text-sky-500" />
                        </div>
                        <p className="text-sm font-medium text-sky-500">Upload Video or png.jpg</p>
                    </div>

                    {/* Caption Input */}
                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-medium text-slate-700">Caption</label>
                        <Input
                            placeholder="Almarai Official Fresh milk bulk deal"
                            className="h-12 rounded-xl border-slate-200 shadow-sm"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <DialogClose asChild>
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-sky-200 text-sky-500 font-bold hover:bg-sky-50 hover:text-sky-600 relative overflow-hidden group">
                                <span className="absolute left-2 top-2 opacity-30 group-hover:opacity-60 transition-opacity">✨</span>
                                <span className="absolute right-2 top-2 opacity-30 group-hover:opacity-60 transition-opacity">✨</span>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-bold shadow-md shadow-sky-200 relative overflow-hidden group">
                            <span className="absolute left-2 top-2 opacity-40 group-hover:opacity-80 transition-opacity">✨</span>
                            <span className="absolute right-2 top-2 opacity-40 group-hover:opacity-80 transition-opacity">✨</span>
                            Add
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
