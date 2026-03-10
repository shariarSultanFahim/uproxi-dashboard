"use client";

import { ReactNode, useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";
import { ReelData } from "../data/mock-reels";

interface EditReelModalProps {
    children: ReactNode;
    reel: ReelData;
    onUpdate: (id: string, newCaption: string) => void;
}

export function EditReelModal({ children, reel, onUpdate }: EditReelModalProps) {
    const [open, setOpen] = useState(false);
    const [caption, setCaption] = useState(reel.caption);

    // Reset caption when modal opens if it changed externally (optional)
    useEffect(() => {
        if (open) {
            setCaption(reel.caption);
        }
    }, [open, reel.caption]);

    const handleUpdate = () => {
        onUpdate(reel.id, caption);
        setOpen(false); // Close the modal
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0 rounded-3xl overflow-hidden border-0 shadow-2xl">
                <div className="p-6">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-xl font-bold text-slate-800">Edit Reel</DialogTitle>
                    </DialogHeader>

                    {/* Upload Area (Re-used visual from AddReelModal) */}
                    <div className="border border-dashed border-sky-300 bg-sky-50/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sky-50 transition-colors mb-6 group relative overflow-hidden">
                        {/* Show a mini representation that an image is already uploaded */}
                        <div className="absolute inset-0 bg-slate-100 opacity-50 z-0"></div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform z-10 shadow-sm border border-slate-200">
                            <UploadCloud className="w-6 h-6 text-sky-500" />
                        </div>
                        <p className="text-sm font-medium text-sky-600 z-10 bg-white/80 px-3 py-1 rounded-full">Replace Media</p>
                    </div>

                    {/* Caption Input */}
                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-medium text-slate-700">Caption</label>
                        <Input
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Enter caption..."
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
                        <Button
                            onClick={handleUpdate}
                            disabled={!caption.trim()}
                            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-bold shadow-md shadow-sky-200 relative overflow-hidden group"
                        >
                            <span className="absolute left-2 top-2 opacity-40 group-hover:opacity-80 transition-opacity">✨</span>
                            <span className="absolute right-2 top-2 opacity-40 group-hover:opacity-80 transition-opacity">✨</span>
                            Update
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
