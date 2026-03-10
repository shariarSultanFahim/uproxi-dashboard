"use client"

import { useState } from "react"
import { mockExpenses } from "./data/mock-cost-commission"
import { Calendar, Trash2, ChevronDown, Plus } from "lucide-react"
import { CCPagination } from "./cc-pagination"
import { AddCostModal } from "./add-cost-modal"
import { Button } from "@/components/ui/button"

export function CostTable() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Pagination
    const totalPages = Math.ceil(mockExpenses.length / itemsPerPage)
    const paginatedExpenses = mockExpenses.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    // Calculate metrics
    const totalToday = 395.50
    const totalWeek = 1240.00
    const totalMonth = 4500.00

    return (
        <div className="flex flex-col h-full min-h-0 bg-[#f8fafc]/50">
            {/* Action Bar */}
            <div className="p-6 pb-2 shrink-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                    <h2 className="text-[18px] font-bold text-[#202c45] mb-1">Daily Expenses</h2>
                    <p className="text-[13px] text-[#8e98a8]">Track and manage operational costs per day.</p>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-10 px-4 rounded-xl border border-slate-200 text-[#475467] font-semibold bg-white shadow-sm hover:bg-slate-50">
                        January <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
                    </Button>
                    <AddCostModal>
                        <Button className="h-10 px-4 rounded-xl bg-[#3dbcf9] hover:bg-[#3dbcf9]/90 text-white font-bold shadow-sm shadow-[#3dbcf9]/20">
                            <Plus className="w-4 h-4 mr-1.5" />
                            Add Cost
                        </Button>
                    </AddCostModal>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[#8e98a8] uppercase tracking-wider">TOTAL TODAY</span>
                    <span className="text-2xl font-bold text-[#202c45]">${totalToday.toFixed(2)}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[#8e98a8] uppercase tracking-wider">THIS WEEK</span>
                    <span className="text-2xl font-bold text-[#202c45]">${totalWeek.toFixed(2)}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[#8e98a8] uppercase tracking-wider">MONTHLY AVERAGE</span>
                    <span className="text-2xl font-bold text-[#202c45]">${totalMonth.toFixed(2)}</span>
                </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-auto custom-scrollbar custom-scrollbar-hidden bg-white mt-2 border-t border-slate-100">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="bg-white sticky top-0 z-10 shadow-sm border-b border-slate-100">
                        <tr>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">DATE</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">DESCRIPTION</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider text-center">CATEGORY</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">AMOUNT</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider text-center w-24">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedExpenses.map((expense) => (
                            <tr key={expense.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="py-5 px-6 align-middle">
                                    <div className="flex items-center gap-2.5 text-[#8e98a8]">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-[13px] font-medium">{expense.date}</span>
                                    </div>
                                </td>

                                <td className="py-5 px-6 align-middle">
                                    <span className="text-[14px] font-bold text-[#202c45]">{expense.description}</span>
                                </td>

                                <td className="py-5 px-6 align-middle text-center">
                                    <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] font-bold bg-[#f1f5f9] text-[#64748b]">
                                        {expense.category}
                                    </span>
                                </td>

                                <td className="py-5 px-6 align-middle">
                                    <span className="text-[14px] font-bold text-[#202c45]">${expense.amount.toFixed(2)}</span>
                                </td>

                                <td className="py-5 px-6 align-middle text-center">
                                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#cbd5e1] hover:text-[#ef4444] transition-colors">
                                        <Trash2 className="w-[18px] h-[18px]" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CCPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                totalItems={mockExpenses.length}
                itemsPerPage={itemsPerPage}
                itemName="expenses"
            />
        </div>
    )
}
