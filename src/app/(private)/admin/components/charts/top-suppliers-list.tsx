"use client"

import { topSuppliersData } from "../data/mock-data"

export function TopSuppliersList() {
    return (
        <div className="space-y-6">
            {topSuppliersData.map((supplier, i) => (
                <div key={supplier.name} className="flex items-center justify-between">
                    <div className="w-[120px] text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis border-b border-dashed border-gray-200 pb-1">
                        {supplier.name}
                    </div>
                    <div className="flex-1 ml-4 border-b border-dashed border-gray-200 pb-1 mr-4" />
                    <div className="w-[200px] h-6 bg-sky-400 rounded-sm" style={{ width: `${supplier.onTime}%`, minWidth: '80px', maxWidth: '200px' }} />
                </div>
            ))}
        </div>
    )
}
