import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function FeedPagination() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 border-t border-slate-100 pt-6 gap-4">
            <div className="text-sm font-medium text-[#8e98a8]">
                Showing <span className="text-[#202c45]">1</span> to <span className="text-[#202c45]">6</span> of <span className="text-[#202c45]">24</span> entries
            </div>

            <Pagination className="mx-0 w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" className="text-[#8e98a8] hover:text-[#202c45]" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#" isActive className="bg-[#1eb564] text-white hover:bg-[#1eb564]/90 hover:text-white border-0">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="text-[#8e98a8] hover:text-[#202c45]">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="text-[#8e98a8] hover:text-[#202c45]">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="text-[#8e98a8] hover:text-[#202c45]">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis className="text-[#8e98a8]" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext href="#" className="text-[#8e98a8] hover:text-[#202c45]" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
