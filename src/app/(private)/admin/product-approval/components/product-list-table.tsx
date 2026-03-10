"use client"

import Image from "next/image"
import { ApprovalRequest } from "./data/mock-requests"
import { Eye, Trash2, MoreHorizontal, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { AddReelModal } from "./modals/add-reel-modal"
import { Pagination } from "./pagination"

interface ProductListTableProps {
    products: ApprovalRequest[]
    currentPage: number
    setCurrentPage: (page: number | ((prev: number) => number)) => void
    totalPages: number
    totalItems: number
    itemsPerPage: number
}

export function ProductListTable({
    products,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    itemsPerPage
}: ProductListTableProps) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col min-h-0 h-full">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-end mb-8 gap-4 shrink-0">
                <div className="flex items-center gap-3 flex-wrap">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-xl border-slate-200 text-slate-500 font-medium h-10 gap-2 px-4 shadow-sm hover:bg-slate-50 bg-white">
                                Supplier <ChevronDown className="w-4 h-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-xl p-2 border-slate-100 shadow-xl shadow-slate-200/50">
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Global Foods Inc.</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Zen Teas Ltd.</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Fresh Valley Produce</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-xl border-slate-200 text-slate-500 font-medium h-10 gap-2 px-4 shadow-sm hover:bg-slate-50 bg-white">
                                Category <ChevronDown className="w-4 h-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-xl p-2 border-slate-100 shadow-xl shadow-slate-200/50">
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Beverages</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Bakery</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Produce</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-xl border-slate-200 text-slate-500 font-medium h-10 gap-2 px-4 shadow-sm hover:bg-slate-50 bg-white">
                                Stock Status <ChevronDown className="w-4 h-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-xl p-2 border-slate-100 shadow-xl shadow-slate-200/50">
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">In Stock</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Low Stock</DropdownMenuItem>
                            <DropdownMenuItem className="rounded-lg cursor-pointer text-slate-600 font-medium focus:bg-slate-50">Out of Stock</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-auto w-full custom-scrollbar min-h-0">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="pb-4 font-bold text-[11px] text-slate-400 uppercase tracking-widest px-4">PRODUCT / ORIGIN</th>
                            <th className="pb-4 font-bold text-[11px] text-slate-400 uppercase tracking-widest px-4">CATEGORY</th>
                            <th className="pb-4 font-bold text-[11px] text-slate-400 uppercase tracking-widest px-4">PRICE & SUPPLIER</th>
                            <th className="pb-4 font-bold text-[11px] text-slate-400 uppercase tracking-widest flex justify-center px-4 w-[120px]">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-slate-50 group hover:bg-slate-50 transition-colors">
                                <td className="py-5 px-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl relative overflow-hidden shrink-0 shadow-sm border border-slate-100 bg-slate-50">
                                            {product.imageUrl && (
                                                <Image
                                                    src={product.imageUrl}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-105"
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-[15px] mb-1">{product.title}</h3>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                                <span className="w-3 h-3 border border-slate-300 rounded-full flex items-center justify-center text-[8px] text-slate-400 mt-0.5">L</span>
                                                {product.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="py-4 px-4 align-middle">
                                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold gap-1.5 bg-blue-50 text-blue-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        {product.category}
                                    </span>
                                </td>

                                <td className="py-4 px-4 align-middle">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">PRICE</span>
                                                <span className="font-bold text-slate-800 text-sm">${product.price?.toFixed(2)}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider mb-0.5">BULK PRICE</span>
                                                <span className="font-bold text-emerald-500 text-sm">${product.bulkPrice?.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            <span className="truncate max-w-[150px]">{product.supplier}</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="py-4 px-4 align-middle text-center">
                                    <div className="flex justify-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="w-8 h-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2 border-slate-100 shadow-xl shadow-slate-200/50">
                                                <AddReelModal>
                                                    <DropdownMenuItem
                                                        onSelect={(e) => e.preventDefault()}
                                                        className="gap-2.5 rounded-xl text-slate-600 font-semibold focus:bg-slate-50 focus:text-slate-800 p-2.5 cursor-pointer"
                                                    >
                                                        <Eye className="w-4 h-4 text-slate-400" />
                                                        Publish for video
                                                    </DropdownMenuItem>
                                                </AddReelModal>
                                                <DropdownMenuItem className="gap-2.5 rounded-xl text-rose-600 font-semibold focus:bg-rose-50 focus:text-rose-700 p-2.5 cursor-pointer mt-1">
                                                    <Trash2 className="w-4 h-4 text-rose-500" />
                                                    Remove Product
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
            />

        </div>
    )
}
