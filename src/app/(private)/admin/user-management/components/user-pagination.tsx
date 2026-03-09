import { Button } from "@/components/ui/button"

interface UserPaginationProps {
    currentPage: number
    setCurrentPage: (page: number | ((prev: number) => number)) => void
    totalPages: number
    totalItems: number
    itemsPerPage: number
    isLoading?: boolean
}

export function UserPagination({
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    isLoading
}: UserPaginationProps) {

    const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
    const rangeEnd = Math.min(currentPage * itemsPerPage, totalItems)

    const paginationNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="gap-3 p-4 text-sm md:flex-row md:items-center md:justify-between flex flex-col border-t border-slate-50 bg-white shrink-0">
            <p className="text-muted-foreground">
                Showing {rangeStart}-{rangeEnd} of {totalItems} entries
            </p>

            <div className="gap-2 flex items-center">
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-slate-200 text-slate-600"
                    disabled={currentPage <= 1 || isLoading}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    Previous
                </Button>

                {paginationNumbers.map((pageNumber) => (
                    <Button
                        key={pageNumber}
                        variant="outline"
                        size="sm"
                        className={`rounded-lg w-9 h-9 border-slate-200 ${currentPage === pageNumber ? "bg-slate-100 font-bold text-slate-900 border-slate-300" : "text-slate-500"}`}
                        disabled={isLoading}
                        onClick={() => setCurrentPage(pageNumber)}
                    >
                        {pageNumber}
                    </Button>
                ))}

                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-slate-200 text-slate-600"
                    disabled={currentPage >= totalPages || totalPages === 0 || isLoading}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
