import { ApprovalRequest } from "../data/mock-requests"
import { FileSpreadsheet, Download, XCircle } from "lucide-react"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Button } from "@/components/ui/button"

interface BulkDetailsProps {
    request: ApprovalRequest
}

export function BulkDetails({ request }: BulkDetailsProps) {
    if (request.type !== "bulk") return null

    return (
        <div className="h-full flex flex-col p-6 overflow-y-auto">

            {/* Top Sheet Graphic Header */}
            <div className="bg-[#f0f9f9] rounded-2xl p-8 pb-10 flex flex-col items-center justify-center relative mb-6">
                <div className="w-16 h-20 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center relative mb-5">
                    {/* Fold corner effect */}
                    <div className="absolute top-0 right-0 w-5 h-5 bg-[#f0f9f9] border-b border-l border-slate-100 rounded-bl-lg"></div>
                    <FileSpreadsheet className="w-8 h-8 text-sky-400" />
                </div>

                <h2 className="text-[19px] font-bold text-emerald-800 mb-2 truncate max-w-full px-4 text-center">
                    {request.title}
                </h2>
                <p className="text-[11px] font-bold text-emerald-500/80 uppercase tracking-wider">
                    BULK IMPORT SHEET
                </p>
            </div>

            {/* Stats Breakdown */}
            <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-slate-100 text-sm">
                    <span className="text-slate-500 font-medium">Total Items</span>
                    <span className="font-bold text-slate-800">{request.itemCount}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-slate-100 text-sm">
                    <span className="text-slate-500 font-medium">File Size</span>
                    <span className="font-bold text-slate-800">{request.fileSize}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50/80 rounded-xl border border-slate-100 text-sm">
                    <span className="text-slate-500 font-medium">Supplier</span>
                    <span className="font-bold text-slate-800">{request.supplier}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-4 pt-4">
                <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 text-slate-700 font-semibold gap-2 hover:bg-slate-50">
                    <Download className="w-4 h-4" />
                    Download Original Sheet
                </Button>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <SparkleButton className="w-full h-12 bg-sky-400 hover:bg-sky-500 text-white font-semibold text-sm">
                        Approve
                    </SparkleButton>

                    <Button variant="outline" className="w-full h-12 rounded-xl border-slate-100 text-rose-500 hover:text-rose-600 hover:bg-rose-50 font-semibold gap-2">
                        <XCircle className="w-4 h-4" />
                        Reject Request
                    </Button>

                    <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                        Upload
                    </Button>
                </div>
            </div>

        </div>
    )
}
