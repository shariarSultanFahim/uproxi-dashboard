"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { mockBrands, mockProducts } from "../components/data/mock-data"
import { ProductCard } from "../components/product-card"
import { Pagination } from "../components/pagination"
import { ExcelUploadModal } from "../components/excel-upload-modal"
import { AddProductModal } from "../components/add-product-modal"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function BrandDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const brandId = params.id as string

    // Find current brand
    const brand = mockBrands.find(b => b.id === brandId)
    // Filter products by brand
    const brandProducts = mockProducts.filter(p => p.brandId === brandId)
    // If we want to show all mock products regardless of brand for demo purposes to fill a 5x5 grid:
    // (5x5 grid means 25 items per page, so we use all mockProducts)
    const productsToShow = mockProducts

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10 // 5 columns x 2 rows (adjust accordingly for 5x5 if needed, taking 10 for better layout demonstration)

    const totalPages = Math.ceil(productsToShow.length / itemsPerPage)
    const paginatedProducts = productsToShow.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div className="flex flex-col min-h-0 h-full space-y-6 bg-slate-50/30">
            {/* Header / Actions */}
            <div className="flex gap-4">
                <ExcelUploadModal />
                <AddProductModal />
            </div>
            {/* Main Content Area */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden flex flex-col flex-1 min-h-0">
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 auto-rows-max">
                        {paginatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    totalItems={productsToShow.length}
                    itemsPerPage={itemsPerPage}
                />
            </div>
        </div>
    )
}
