import { Button } from "@/components/ui/button"

interface CCPaginationProps {
    currentPage: number
    setCurrentPage: (page: number | ((prev: number) => number)) => void
    totalPages: number
    totalItems: number
    itemsPerPage: number
    itemName: string
    isLoading?: boolean
}

export function CCPagination({
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    itemName,
    isLoading
}: CCPaginationProps) {

    const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
    const rangeEnd = Math.min(currentPage * itemsPerPage, totalItems)

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-5 border-t border-slate-100 mt-auto shrink-0 bg-white rounded-b-xl gap-4">
            <p className="text-[13px] font-medium text-slate-400">
                Showing {rangeEnd === 0 ? 0 : rangeEnd} of {totalItems} {itemName}
            </p>

            <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-100">
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-4 text-[13px] font-semibold text-slate-400 hover:text-slate-700 rounded-md hover:bg-white disabled:opacity-50"
                    disabled={currentPage <= 1 || isLoading}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    Prev
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-4 text-[13px] font-bold text-slate-700 bg-white shadow-sm border-slate-200 rounded-md disabled:opacity-50 hover:bg-slate-50"
                    disabled={currentPage >= totalPages || totalPages === 0 || isLoading}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
