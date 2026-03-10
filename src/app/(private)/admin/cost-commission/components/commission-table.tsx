"use client"

import { useState } from "react"
import { Supplier, mockSuppliers } from "./data/mock-cost-commission"
import { Pencil, MapPin } from "lucide-react"
import { CCPagination } from "./cc-pagination"

export function CommissionTable() {
    const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Inline Editing State
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editValue, setEditValue] = useState<string>("")

    const handleEditClick = (supplier: Supplier) => {
        setEditingId(supplier.id)
        setEditValue(supplier.commissionRate.toString())
    }

    const handleSave = (id: string) => {
        const newRate = parseFloat(editValue)
        if (!isNaN(newRate)) {
            setSuppliers(prev =>
                prev.map(sup => sup.id === id ? { ...sup, commissionRate: newRate } : sup)
            )
        }
        setEditingId(null)
    }

    const handleCancel = () => {
        setEditingId(null)
        setEditValue("")
    }

    // Pagination
    const totalPages = Math.ceil(suppliers.length / itemsPerPage)
    const paginatedSuppliers = suppliers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="p-6 border-b border-slate-100 shrink-0">
                <h2 className="text-xl font-bold text-[#202c45]">All Suppliers</h2>
            </div>

            <div className="flex-1 overflow-auto custom-scrollbar custom-scrollbar-hidden">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="bg-[#f8fafc] sticky top-0 z-10 shadow-sm border-b border-slate-100">
                        <tr>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">SUPPLIERS NAME</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">ROLE</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">STATUS</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider">COMMISSION (%)</th>
                            <th className="py-4 px-6 font-bold text-[11px] text-[#8e98a8] uppercase tracking-wider text-right">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedSuppliers.map((supplier) => (
                            <tr key={supplier.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="py-5 px-6">
                                    <h3 className="font-bold text-[#202c45] text-[15px] mb-1.5">{supplier.name}</h3>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-[11px] font-semibold text-[#8e98a8]">
                                        <MapPin className="w-3 h-3 text-[#c0c6d4]" />
                                        {supplier.location}
                                    </div>
                                </td>

                                <td className="py-5 px-6 align-middle">
                                    <span className="text-[14px] font-medium text-[#475467]">{supplier.role}</span>
                                </td>

                                <td className="py-5 px-6 align-middle">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecfdf3] text-[#027a48]">
                                        {supplier.status}
                                    </span>
                                </td>

                                <td className="py-5 px-6 align-middle">
                                    {editingId === supplier.id ? (
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="number"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="w-20 px-3 py-1.5 border border-[#3dbcf9] rounded-lg text-sm font-bold text-[#202c45] focus:outline-none focus:ring-2 focus:ring-[#3dbcf9]/20"
                                                autoFocus
                                            />
                                            <button
                                                onClick={() => handleSave(supplier.id)}
                                                className="text-[13px] font-bold text-[#4e5dfa] hover:text-[#4e5dfa]/80"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="text-[13px] font-medium text-[#475467] hover:text-[#202c45]"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <span className="font-bold text-[#202c45] text-[14px]">{supplier.commissionRate}%</span>
                                    )}
                                </td>

                                <td className="py-5 px-6 align-middle text-right">
                                    <button
                                        onClick={() => handleEditClick(supplier)}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#8e98a8] hover:text-[#4e5dfa] hover:bg-[#4e5dfa]/10 transition-colors"
                                        disabled={editingId !== null}
                                    >
                                        <Pencil className="w-4 h-4" />
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
                totalItems={suppliers.length}
                itemsPerPage={itemsPerPage}
                itemName="suppliers"
            />
        </div>
    )
}
