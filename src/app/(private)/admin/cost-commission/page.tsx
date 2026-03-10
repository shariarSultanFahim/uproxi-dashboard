"use client"

import { useState } from "react"
import { CommissionTable } from "./components/commission-table"
import { CostTable } from "./components/cost-table"

export default function CostCommissionPage() {
  const [activeTab, setActiveTab] = useState<"commission" | "cost">("commission")

  return (
    <div className="flex flex-col min-h-0 h-full w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-[#202c45] mb-2 tracking-tight">Finance & Growth</h1>
          <p className="text-[#8e98a8] text-[15px]">Manage supplier commissions and track daily costs.</p>
        </div>

        <div className="flex items-center bg-white border border-slate-100 shadow-sm p-1 rounded-xl w-fit shrink-0">
          <button
            onClick={() => setActiveTab("commission")}
            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 ${activeTab === "commission"
              ? "bg-[#3dbcf9] text-white shadow-sm"
              : "text-[#8e98a8] hover:text-[#475467]"
              }`}
          >
            Commission List
          </button>
          <button
            onClick={() => setActiveTab("cost")}
            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 ${activeTab === "cost"
              ? "bg-[#3dbcf9] text-white shadow-sm"
              : "text-[#8e98a8] hover:text-[#475467]"
              }`}
          >
            Cost List
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 flex flex-col bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
        {activeTab === "commission" ? (
          <CommissionTable />
        ) : (
          <CostTable />
        )}
      </div>

    </div>
  )
}
