"use client"

import { useState } from "react"
import { mockOrders, OrderStatus } from "./components/data/mock-orders"
import { OrdersHeader } from "./components/orders-header"
import { OrderListCard } from "./components/order-list-card"
import { OrdersPagination } from "./components/orders-pagination"
import { Clock, CheckCircle2 } from "lucide-react"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderStatus>("pending")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter by tab
  const filteredOrders = mockOrders.filter(order => order.status === activeTab)

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Get Counts
  const pendingCount = mockOrders.filter(o => o.status === "pending").length
  const deliveredCount = mockOrders.filter(o => o.status === "delivered").length

  return (
    <div className="flex flex-col min-h-0 h-full  w-full">
      <OrdersHeader />

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => { setActiveTab("pending"); setCurrentPage(1); }}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border font-bold text-sm transition-all duration-200 ${activeTab === "pending"
            ? "border-amber-200 bg-white text-slate-800 shadow-sm"
            : "border-transparent text-slate-500 hover:bg-slate-50"
            }`}
        >
          <Clock className={`w-4 h-4 ${activeTab === "pending" ? "text-amber-500" : "text-slate-400"}`} />
          Pending Review
          <span className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-100 text-[10px] text-slate-500 ms-1">
            {pendingCount}
          </span>
        </button>
        <button
          onClick={() => { setActiveTab("delivered"); setCurrentPage(1); }}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border font-bold text-sm transition-all duration-200 ${activeTab === "delivered"
            ? "border-emerald-200 bg-white text-slate-800 shadow-sm"
            : "border-transparent text-slate-500 hover:bg-slate-50"
            }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${activeTab === "delivered" ? "text-emerald-500" : "text-slate-400"}`} />
          Delivered
          <span className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-100 text-[10px] text-slate-500 ms-1">
            {deliveredCount}
          </span>
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
        {paginatedOrders.length > 0 ? (
          <div className="flex flex-col">
            {paginatedOrders.map(order => (
              <OrderListCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400 font-medium">
            No {activeTab} orders found.
          </div>
        )}
      </div>

      {/* Pagination Box */}
      <OrdersPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalItems={filteredOrders.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  )
}
