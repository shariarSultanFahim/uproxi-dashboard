import Image from "next/image"
import { ApprovalRequest } from "../data/mock-requests"
import { FileSpreadsheet, ChevronRight } from "lucide-react"

interface RequestCardProps {
    request: ApprovalRequest
    isSelected: boolean
    onClick: () => void
}

export function RequestCard({ request, isSelected, onClick }: RequestCardProps) {
    if (request.type === "bulk") {
        return (
            <div
                onClick={onClick}
                className={`flex items-center justify-between p-4 px-6 cursor-pointer border-b border-slate-100 last:border-0 transition-colors ${isSelected ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
            >
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100/50 shrink-0">
                        <FileSpreadsheet className="w-7 h-7 text-sky-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-[15px] mb-1">{request.title}</h3>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="text-slate-500">{request.subtitle}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="text-emerald-500 uppercase">BULK IMPORT</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                    <span className="text-[11px] text-slate-400 font-medium">{request.timestamp}</span>
                    {isSelected ? (
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-slate-200 flex items-center justify-center text-[8px]">✓</span>
                                {request.itemCount} Items
                            </div>
                            <div className="flex items-center gap-1.5">
                                <FileSpreadsheet className="w-3 h-3" />
                                {request.fileSize}
                            </div>
                        </div>
                    ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                    )}
                </div>
            </div>
        )
    }

    // Individual Product Card
    return (
        <div
            onClick={onClick}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 cursor-pointer border-b border-slate-100 last:border-0 transition-colors gap-4 ${isSelected ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
        >
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl relative overflow-hidden shrink-0 shadow-sm border border-slate-100 bg-slate-50">
                    {request.imageUrl && (
                        <Image
                            src={request.imageUrl}
                            alt={request.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    )}
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-[15px] mb-1">{request.title}</h3>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="text-slate-500">{request.subtitle}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-slate-400 uppercase">{request.category}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-slate-100 sm:border-0">
                <span className="text-[11px] text-slate-400 font-medium hidden sm:block">{request.timestamp}</span>

                <div className="flex items-center gap-6 sm:mt-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">PRICE</span>
                        <span className="font-bold text-slate-800 text-sm">${request.price?.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-emerald-500 uppercase font-bold mb-0.5">BULK PRICE</span>
                        <span className="font-bold text-emerald-500 text-sm">${request.bulkPrice?.toFixed(2)}</span>
                    </div>
                </div>
                {/* Mobile timestamp */}
                <span className="text-[11px] text-slate-400 font-medium sm:hidden">{request.timestamp}</span>
            </div>
        </div>
    )
}
