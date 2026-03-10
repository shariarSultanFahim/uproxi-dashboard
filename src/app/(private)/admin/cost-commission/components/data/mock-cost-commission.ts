export interface Supplier {
    id: string
    name: string
    location: string
    role: string
    status: "Active" | "Inactive"
    commissionRate: number
}

export interface Expense {
    id: string
    date: string
    description: string
    category: string
    amount: number
}

export const mockSuppliers: Supplier[] = [
    { id: "sup-1", name: "Metro Mart", location: "Downtown District", role: "Supplier", status: "Active", commissionRate: 12 },
    { id: "sup-2", name: "Fresh Farms LLC", location: "Valley Region", role: "Supplier", status: "Active", commissionRate: 8.5 },
    { id: "sup-3", name: "City Grocers", location: "Westside", role: "Supplier", status: "Active", commissionRate: 10 },
    { id: "sup-4", name: "Grain Masters", location: "North Hills", role: "Supplier", status: "Active", commissionRate: 15 },
    { id: "sup-5", name: "Organic Choice", location: "East Coast", role: "Supplier", status: "Active", commissionRate: 11 },
    ...Array.from({ length: 19 }).map((_, i) => ({
        id: `sup-mock-${i}`,
        name: `Supplier ${i + 6}`,
        location: ["North", "South", "East", "West"][i % 4] + " Region",
        role: "Supplier",
        status: "Active" as const,
        commissionRate: Math.floor(Math.random() * 15) + 5
    }))
]

export const mockExpenses: Expense[] = [
    { id: "exp-1", date: "2023-10-24", description: "Daily Delivery Fees", category: "Logistics", amount: 150.00 },
    { id: "exp-2", date: "2023-10-24", description: "Packaging Materials", category: "Inventory", amount: 45.50 },
    { id: "exp-3", date: "2023-10-23", description: "Server Maintenance", category: "Operations", amount: 29.99 },
    { id: "exp-4", date: "2023-10-23", description: "Marketing Ad Spend", category: "Marketing", amount: 200.00 },
    ...Array.from({ length: 25 }).map((_, i) => ({
        id: `exp-mock-${i}`,
        date: `2023-10-${String(22 - (i % 10)).padStart(2, '0')}`,
        description: `Misc Expense ${i}`,
        category: ["Logistics", "Inventory", "Operations", "Marketing"][i % 4],
        amount: Math.floor(Math.random() * 300 * 100) / 100
    }))
]
