"use client"

import { useState, useEffect } from "react"
import { mockApprovalRequests, ApprovalRequest } from "./components/data/mock-requests"
import { ApprovalHeader } from "./components/approval-header"
import { RequestCard } from "./components/cards/request-card"
import { BulkDetails } from "./components/details/bulk-details"
import { IndividualDetails } from "./components/details/individual-details"
import { Pagination } from "./components/pagination"
import { ProductListTable } from "./components/product-list-table"

export default function ProductApprovalPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter requests based on tab
  const filteredRequests = mockApprovalRequests.filter(req => {
    // Exclude the newly added "prod-" approved products from All/Individual tabs completely, so they only show in the list view
    if (activeTab === "all" && !req.id.startsWith("prod-")) return true
    if (activeTab === "individual" && req.type === "individual" && !req.id.startsWith("prod-")) return true
    if (activeTab === "bulk" && req.type === "bulk") return true
    if (activeTab === "list" && req.id.startsWith("prod-")) return true // "list" shows the specially added approved products
    return false
  })

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3 // Small number for demonstration to see pagination

  // Reset pagination when tab changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab])

  // Select first item by default when tab changes
  const [selectedRequest, setSelectedRequest] = useState<ApprovalRequest | null>(null)
  useEffect(() => {
    setSelectedRequest(filteredRequests[0] || null)
  }, [activeTab])

  const pendingCount = mockApprovalRequests.filter(req => !req.id.startsWith("prod-")).length

  // Calculate pagination
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)
  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col min-h-0 h-full">
      <ApprovalHeader onTabChange={setActiveTab} />

      {activeTab === 'list' ? (
        // When in Product List mode, show the full width approved products table
        <div className="flex-1 min-h-0">
          <ProductListTable
            products={paginatedRequests}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            totalItems={filteredRequests.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      ) : (
        // Otherwise, show the Master-Detail Layout for Pending Approvals
        <div className="flex flex-col xl:flex-row gap-6 flex-1 min-h-0">

          {/* Left Column: Request List */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col min-h-0 xl:min-w-[500px]">
            <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between shrink-0 h-16">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold p-2.5">P</span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  PENDING REQUESTS ({pendingCount})
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col min-h-0 relative">
              {paginatedRequests.length > 0 ? (
                <div className="flex-1 overflow-y-auto">
                  {paginatedRequests.map(request => (
                    <RequestCard
                      key={request.id}
                      request={request}
                      isSelected={selectedRequest?.id === request.id}
                      onClick={() => setSelectedRequest(request)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
                  No items found.
                </div>
              )}
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                totalItems={filteredRequests.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>

          {/* Right Column: Details Panel */}
          <div className="w-full xl:w-[400px] 2xl:w-[450px] bg-white rounded-2xl border border-slate-100 shadow-sm shrink-0 flex flex-col min-h-0">
            {selectedRequest ? (
              selectedRequest.type === "bulk" ? (
                <BulkDetails request={selectedRequest} />
              ) : (
                <IndividualDetails request={selectedRequest} isApprovedView={false} />
              )
            ) : (
              <div className="p-8 text-center text-slate-500 h-full flex items-center justify-center">
                Select an item to view details
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  )
}
