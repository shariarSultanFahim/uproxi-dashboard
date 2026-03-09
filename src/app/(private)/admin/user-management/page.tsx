"use client"

import { useState, useMemo } from "react"
import { mockUsers } from "./components/data/users"
import { UserHeader } from "./components/user-header"
import { UserFilters } from "./components/user-filters"
import { UserTable } from "./components/user-table"
import { UserPagination } from "./components/user-pagination"

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState<"Active Directory" | "New Requests">("Active Directory")
  const [roleFilter, setRoleFilter] = useState<"Alls" | "Grocerymarkets" | "Suppliers">("Alls")

  // Advanced filters
  const [supplierFilter, setSupplierFilter] = useState<string>("all")
  const [areaFilter, setAreaFilter] = useState<string>("all")
  const [cityFilter, setCityFilter] = useState<string>("all")

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter out the users based on selected logic
  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      // 1. Tab Filtering
      const isPending = user.status === "Pending"
      if (activeTab === "New Requests" && !isPending) return false
      if (activeTab === "Active Directory" && isPending) return false

      // 2. Role Toggle Filtering
      if (roleFilter === "Grocerymarkets" && user.role !== "Grocerymarket") return false
      if (roleFilter === "Suppliers" && user.role !== "Supplier") return false

      // 3. Dropdown Filters
      if (areaFilter !== "all" && user.area !== areaFilter) return false
      if (cityFilter !== "all" && user.city !== cityFilter) return false
      // Supplier specific text filter would go here if implemented in data mock
      // if (supplierFilter !== "all" && ...) return false

      return true
    })
  }, [activeTab, roleFilter, areaFilter, cityFilter, supplierFilter])

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Handlers for switching tabs resetting pagination
  const handleTabChange = (tab: "Active Directory" | "New Requests") => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  const handleRoleToggle = (role: "Alls" | "Grocerymarkets" | "Suppliers") => {
    setRoleFilter(role)
    setCurrentPage(1)
  }

  const pendingCount = mockUsers.filter(u => u.status === "Pending").length
  const isLoading = false // Toggle when implementing real API fetch

  return (
    <div className="flex flex-col min-h-0 h-full p-2 md:p-6 lg:p-8 space-y-8 bg-slate-50/30">

      <UserHeader roleFilter={roleFilter} onRoleToggle={handleRoleToggle} />

      <UserFilters
        activeTab={activeTab}
        onTabChange={handleTabChange}
        pendingCount={pendingCount}
        supplierFilter={supplierFilter}
        setSupplierFilter={setSupplierFilter}
        areaFilter={areaFilter}
        setAreaFilter={setAreaFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
      />

      {/* Main Table Content Container */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col flex-1 min-h-0">

        <div className="flex-1 overflow-y-auto">
          <UserTable
            users={paginatedUsers}
            isPendingTab={activeTab === "New Requests"}
            isLoading={isLoading}
          />
        </div>

        <UserPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={filteredUsers.length}
          itemsPerPage={itemsPerPage}
          isLoading={isLoading}
        />

      </div>
    </div>
  )
}
