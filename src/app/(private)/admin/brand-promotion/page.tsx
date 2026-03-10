"use client"

import { useState } from "react"
import { mockBrands } from "./components/data/mock-data"
import { BrandCard } from "./components/brand-card"
import { Pagination } from "./components/pagination"
import { AddBrandModal } from "./components/add-brand-modal"

export default function BrandPromotionPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9 // 3x3 grid

  const totalPages = Math.ceil(mockBrands.length / itemsPerPage)
  const paginatedBrands = mockBrands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col min-h-0 h-full space-y-6 bg-slate-50/30">
      {/* Header / Actions */}
      <div className="flex justify-end items-center mb-2">
        <AddBrandModal />
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 overflow-hidden flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {paginatedBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={mockBrands.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  )
}
