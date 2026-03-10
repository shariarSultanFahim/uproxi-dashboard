import Image from "next/image"
import { ApprovalRequest } from "../data/mock-requests"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

interface IndividualDetailsProps {
    request: ApprovalRequest
    isApprovedView?: boolean
}

export function IndividualDetails({ request, isApprovedView }: IndividualDetailsProps) {
    if (request.type !== "individual") return null

    return (
        <div className="h-full flex flex-col p-6 overflow-y-auto">

            {/* Top Graphic Header */}
            <div className="bg-[#f0f9f9] rounded-2xl p-6 flex flex-col items-center justify-center relative mb-6">
                <div className="w-24 h-24 bg-white rounded-xl shadow-sm overflow-hidden relative border border-slate-100 mb-4">
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

                <h2 className="text-[19px] font-bold text-emerald-800 mb-2 truncate max-w-full px-2 text-center leading-tight">
                    {request.title}
                </h2>
                <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-500/80 uppercase tracking-wider">
                    <span>{request.subtitle}</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50"></span>
                    <span>{request.category}</span>
                </div>
            </div>

            {/* Stats Breakdown */}
            <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-slate-100 text-sm">
                    <span className="text-slate-500 font-medium whitespace-nowrap mr-4">Regular Price</span>
                    <span className="font-bold text-slate-800">${request.price?.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-emerald-100/50 text-sm">
                    <span className="text-emerald-600 font-medium whitespace-nowrap mr-4">Bulk Price</span>
                    <span className="font-bold text-emerald-600">${request.bulkPrice?.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-slate-100 text-sm">
                    <span className="text-slate-500 font-medium whitespace-nowrap mr-4">Date Submitted</span>
                    <span className="font-bold text-slate-800">{request.timestamp}</span>
                </div>
            </div>

            {/* Actions */}
            {!isApprovedView && (
                <div className="mt-auto space-y-4 pt-4 border-t border-slate-100">
                    <SparkleButton className="w-full h-12 bg-sky-400 hover:bg-sky-500 text-white font-semibold text-sm">
                        Approve Product
                    </SparkleButton>

                    <Button variant="outline" className="w-full h-12 rounded-xl border-slate-100 text-rose-500 hover:text-rose-600 hover:bg-rose-50 font-semibold gap-2">
                        <XCircle className="w-4 h-4" />
                        Reject Request
                    </Button>
                </div>
            )}

            {isApprovedView && (
                <div className="mt-auto px-4 py-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-sm font-semibold text-center flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Currently Approved & Active
                </div>
            )}

        </div>
    )
}
