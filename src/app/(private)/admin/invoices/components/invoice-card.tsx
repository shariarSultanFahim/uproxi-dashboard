import Link from "next/link";
import { Copy, Download, DownloadIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Invoice } from "../data/mock-invoices";

interface InvoiceCardProps {
    invoice: Invoice;
}

export function InvoiceCard({ invoice }: InvoiceCardProps) {
    return (
        <Card className="rounded-3xl border-slate-100 shadow-sm bg-white overflow-hidden p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
                <div className="flex bg-[#f8f9fc] rounded-xl p-4 flex-1 mr-4">
                    <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-[#202c45] text-lg">Invoice #</h3>
                        <p className="text-[#8e98a8] text-sm">#{invoice.id}</p>

                        {/* Fake skeleton lines mimicking standard styling */}
                        <div className="flex gap-2 pt-2">
                            <div className="h-2 w-16 bg-slate-200 rounded-full" />
                            <div className="h-2 w-24 bg-slate-200 rounded-full" />
                        </div>
                        <div className="h-2 w-32 bg-slate-200 rounded-full mt-2" />

                        <div className="pt-4">
                            <Badge
                                variant="outline"
                                className={`px-3 py-1 font-medium border-0 ${invoice.status === "Paid"
                                        ? "bg-[#e8f8f0] text-[#1eb564]"
                                        : "bg-[#fceaea] text-[#ef4444]"
                                    }`}
                            >
                                {invoice.status}
                            </Badge>
                        </div>
                    </div>
                    {/* Folded corner effect mimicking screenshot */}
                    <div className="w-12 h-12 bg-white rounded-bl-3xl -mt-4 -mr-4 border-l border-b border-[#f8f9fc]" />
                </div>

                {invoice.status === "Paid" && (
                    <Button variant="outline" size="icon" className="rounded-full shadow-sm text-[#8e98a8] shrink-0 border-slate-200">
                        <DownloadIcon className="w-4 h-4" />
                    </Button>
                )}
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-[#8e98a8] text-[15px]">Shop name</span>
                    <span className="font-semibold text-[#202c45]">{invoice.shopName}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-[#8e98a8] text-[15px]">Amount</span>
                    <span className="font-semibold text-[#202c45]">${invoice.amount.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                    <span className="text-[#8e98a8] text-[15px]">Created</span>
                    <span className="font-semibold text-[#202c45]">{invoice.createdAt}</span>
                </div>
            </div>
        </Card>
    );
}
