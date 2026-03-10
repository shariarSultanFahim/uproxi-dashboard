"use client";

import { ReelData } from "../data/mock-reels";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, Play, Trash2, Pencil } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditReelModal } from "./edit-reel-modal";

interface ReelCardProps {
    reel: ReelData;
    onDelete: (id: string) => void;
    onUpdate: (id: string, newCaption: string) => void;
}

export function ReelCard({ reel, onDelete, onUpdate }: ReelCardProps) {
    return (
        <Card className="rounded-2xl border border-slate-100 shadow-sm bg-white overflow-hidden flex flex-col p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-slate-100">
                        {/* Fallback to initials if image doesn't load/exist */}
                        <AvatarImage src={reel.avatarUrl} alt={reel.authorName} />
                        <AvatarFallback className="bg-sky-50 text-sky-700 font-bold">
                            {reel.authorName.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-bold text-[#202c45] text-sm">{reel.authorName}</span>
                        <div className="flex items-center text-[#8e98a8] text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {reel.location}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(reel.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Edit Button (Opens Modal) */}
                    <EditReelModal reel={reel} onUpdate={onUpdate}>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors">
                            <Pencil className="w-4 h-4" />
                        </button>
                    </EditReelModal>
                </div>
            </div>

            {/* Media Thumbnail */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 group cursor-pointer">
                {/* We use a generic colored div if the actual image isn't available in public folder */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    {/* Replace this with actual next/image if you add the image to public folder */}
                    <Image
                        src="/images/market.jpg" // Fallback placeholder path, assuming it exists or will be broken image
                        alt="Reel thumbnail"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            // Ignore broken image in mockup
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <span className="z-0 opacity-50">Thumbnail Image</span>
                </div>

                {/* Play Icon Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center z-10 text-white">
                    <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </div>
            </div>

            {/* Footer / Info */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center text-[#202c45] font-bold text-sm">
                    <Heart className="w-5 h-5 mr-2 text-slate-300" />
                    {reel.likes.toLocaleString()} likes
                </div>

                <p className="text-sm text-[#475467] leading-relaxed line-clamp-2">
                    <span className="font-bold text-[#202c45] mr-1">{reel.authorName}</span>
                    {reel.caption}
                </p>
            </div>
        </Card>
    );
}
