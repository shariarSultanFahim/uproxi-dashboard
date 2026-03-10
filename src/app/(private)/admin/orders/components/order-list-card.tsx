import Link from "next/link"
import { Order } from "./data/mock-orders"
import { Store, Truck, ShoppingBag, Clock } from "lucide-react"

interface OrderListCardProps {
    order: Order
}

export function OrderListCard({ order }: OrderListCardProps) {
    return (
        <Link
            href={`/admin/orders/${order.id}`}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full group mb-3"
        >
            <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${order.status === 'pending' ? 'bg-amber-50 border-amber-100/50' : 'bg-emerald-50 border-emerald-100/50'}`}>
                    <Clock className={`w-6 h-6 ${order.status === 'pending' ? 'text-amber-500' : 'text-emerald-500'}`} />
                </div>

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-4">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            {order.id}
                        </h3>
                        <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100/50 inline-flex items-center">
                            <span className="text-xs font-medium text-slate-500">
                                {order.timestamp}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-1 text-[13px] font-semibold text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <Store className="w-4 h-4 text-slate-300" />
                            <span>{order.customer.groceryName}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <div className="flex items-center gap-1.5">
                            <Truck className="w-4 h-4 text-slate-300" />
                            <span>{order.supplier}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <div className="flex items-center gap-1.5">
                            <ShoppingBag className="w-4 h-4 text-slate-300" />
                            <span>{order.items.length} Items</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL VALUE</span>
                <span className="text-2xl font-bold text-slate-800">${order.totalValue.toLocaleString()}</span>
            </div>
        </Link>
    )
}
