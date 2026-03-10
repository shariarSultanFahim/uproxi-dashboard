import { notFound } from "next/navigation";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockInvoices } from "../data/mock-invoices";

export default async function InvoiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);

    // Simulate a network delay so you can see the loader
    await new Promise((resolve) => setTimeout(resolve, 600));

    const invoice = mockInvoices.find((inv) => inv.id === decodedId);

    if (!invoice) {
        notFound();
    }

    const totalAmount = invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex-1 space-y-6 w-full">
            <Link href="/admin/invoices" className="inline-flex items-center text-sm font-medium text-[#475467] hover:text-[#202c45] transition-colors mb-2">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Invoices
            </Link>

            <div className="space-y-6">
                {/* Top Header Card */}
                <Card className="rounded-3xl border-slate-100 shadow-sm bg-white p-8 flex flex-col items-center justify-center relative">
                    <div className="absolute left-8 bottom-8">
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
                    <div className="absolute right-8 bottom-8 text-sm text-[#8e98a8]">
                        {invoice.dueDate || invoice.createdAt}
                    </div>

                    <div className="w-16 h-16 bg-[#e8f8f0] text-[#1eb564] rounded-2xl flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="text-[#8e98a8] text-sm mb-1">Total Amount</p>
                    <h2 className="text-4xl font-bold text-[#202c45]">${totalAmount.toFixed(2)}</h2>
                </Card>

                {/* Info Card */}
                <Card className="rounded-3xl border-slate-100 shadow-sm bg-white p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <p className="text-[#8e98a8] text-xs mb-1">Invoice No</p>
                            <p className="font-semibold text-[#202c45]">{invoice.id}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[#8e98a8] text-xs mb-1">Order ID</p>
                            <p className="font-semibold text-[#202c45]">{invoice.orderId}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#8e98a8] text-xs mb-3">Bill To</p>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border border-slate-100 shadow-sm">
                                <AvatarImage src={invoice.shopAvatar} alt={invoice.shopName} />
                                <AvatarFallback>{invoice.shopName.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-bold text-[#202c45]">{invoice.shopName}</h4>
                                <p className="text-[#8e98a8] text-sm">{invoice.shopAddress}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Item Details Card */}
                <Card className="rounded-3xl border-slate-100 shadow-sm bg-white p-8">
                    <h3 className="font-bold text-[#202c45] text-lg mb-6 pb-4 border-b border-slate-100">Item Details</h3>

                    <div className="space-y-6">
                        {invoice.items.map((item) => (
                            <div key={item.id} className="flex justify-between items-start">
                                <div>
                                    <p className="text-[#202c45] text-[15px] font-medium">{item.name}</p>
                                    <p className="text-[#8e98a8] text-sm">Qty: {item.quantity} x Unit</p>
                                </div>
                                <p className="font-medium text-[#202c45]">${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                        <p className="font-bold text-[#202c45] text-xl">Total</p>
                        <p className="font-bold text-[#3dbcf9] text-xl">${totalAmount.toFixed(2)}</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
