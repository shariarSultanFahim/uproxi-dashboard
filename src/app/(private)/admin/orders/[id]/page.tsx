"use client"

import { useParams } from "next/navigation"
import { mockOrders } from "../components/data/mock-orders"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrderDetailsPage() {
    const params = useParams()
    const orderId = params.id as string

    const order = mockOrders.find(o => o.id === orderId)

    if (!order) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-slate-500 font-medium">Order not found.</p>
                <Link href="/admin/orders">
                    <Button variant="outline" className="mt-4">Back to Orders</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full w-full mx-auto relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 shrink-0">
                <Link href="/admin/orders">
                    <Button variant="ghost" size="icon" className="rounded-xl w-10 h-10 bg-white shadow-sm border border-slate-200 text-slate-500 hover:text-slate-800">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">Order Details - {order.id}</h1>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pe-4 pb-10">

                {/* Customer Information */}
                <div className="mb-10">
                    <h2 className="text-lg font-bold text-[#202c45] mb-4">Customer Information</h2>
                    <div className="flex flex-col gap-3 text-[14px]">
                        <div className="flex items-center">
                            <span className="text-[#8e98a8] w-32">Grocery Name</span>
                            <span className="text-[#8e98a8] mr-2">:</span>
                            <span className="text-[#475467] font-medium">{order.customer.groceryName}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#8e98a8] w-32">Phone Number</span>
                            <span className="text-[#8e98a8] mr-2">:</span>
                            <span className="text-[#475467] font-medium">{order.customer.phoneNumber}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#8e98a8] w-32">Address</span>
                            <span className="text-[#8e98a8] mr-2">:</span>
                            <span className="text-[#475467] font-medium">{order.customer.address}</span>
                        </div>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-[#202c45] mb-4">Order Items</h2>
                    <div className="flex flex-col gap-4">
                        {order.items.slice(0, 2).map((item, index) => (
                            <div key={index} className="flex p-4 bg-white rounded-xl border border-slate-100 shadow-sm items-center">
                                <div className="w-[100px] h-[100px] rounded-xl relative overflow-hidden shrink-0 border border-slate-100 mr-5">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-[#202c45] text-[16px]">{item.name}</h3>
                                        <div className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[11px] font-bold text-slate-800">
                                            Qty: {item.quantity}
                                        </div>
                                    </div>
                                    <span className="text-[12px] font-medium text-[#c0c6d4]">
                                        SKU : {item.sku}
                                    </span>

                                    <div className="mt-1">
                                        <div className="text-[18px] font-bold text-[#202c45]">
                                            ${item.price.toFixed(2)}
                                        </div>
                                        <div className="text-[12px] font-bold text-[#00c2e0] mt-0.5">
                                            Bulk: ${item.bulkPrice.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Box */}
                <div className="bg-[#f0f9fa] border border-[#bcebeb] rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col gap-3.5 mb-5 border-b border-[#bcebeb]/50 pb-5">
                        {order.items.slice(0, 2).map((item, index) => (
                            <div key={index} className="flex justify-between items-center text-[15px] font-medium text-[#7d8b9e]">
                                <span>{item.name} Basket {item.quantity / 4}x</span>
                                <span className="text-[#202c45] font-bold">${(item.price * (item.quantity / 4)).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-1">
                        <span className="font-bold text-[#202c45] text-[16px]">Total Paid</span>
                        <span className="font-bold text-[#00c2e0] text-[18px]">${order.totalValue.toFixed(2)}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
