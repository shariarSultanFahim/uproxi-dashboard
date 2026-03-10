export type OrderStatus = "pending" | "delivered"

export interface OrderItem {
    id: string
    name: string
    sku: string
    price: number
    bulkPrice: number
    quantity: number
    imageUrl: string
}

export interface CustomerInfo {
    groceryName: string
    phoneNumber: string
    address: string
}

export interface Order {
    id: string
    status: OrderStatus
    timestamp: string
    customer: CustomerInfo
    supplier: string
    items: OrderItem[]
    totalValue: number
}

// Helper to generate mock items
const generateMockItems = (count: number): OrderItem[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `img-${i}`,
        name: "Farm Fresh Produce",
        sku: "VEG-001",
        price: 10.00,
        bulkPrice: 8.50,
        quantity: 12,
        imageUrl: "https://placehold.co/400x400/d6ebd6/ffffff?text=Produce"
    }))
}

export const mockOrders: Order[] = [
    {
        id: "ORD-5501",
        status: "pending",
        timestamp: "Oct 03, 2025 · 10:45 AM",
        customer: {
            groceryName: "Arabian shop",
            phoneNumber: "+98541512547",
            address: "123 Innovation Drive Silicon Valley, CA 94025, United States"
        },
        supplier: "Fresh Farms LLC",
        items: generateMockItems(12),
        totalValue: 1240.50
    },
    {
        id: "ORD-5502",
        status: "pending",
        timestamp: "Oct 03, 2025 · 09:30 AM",
        customer: {
            groceryName: "City Grocers",
            phoneNumber: "+1234567890",
            address: "456 Market St, San Francisco, CA"
        },
        supplier: "Valley Meats Co",
        items: generateMockItems(8),
        totalValue: 850.00
    },
    {
        id: "ORD-5499",
        status: "delivered",
        timestamp: "Oct 02, 2025 · 02:15 PM",
        customer: {
            groceryName: "Metro Mart",
            phoneNumber: "+1987654321",
            address: "789 Downtown Ave, Los Angeles, CA"
        },
        supplier: "Global Foods Inc.",
        items: generateMockItems(24),
        totalValue: 2150.75
    },
    // Add more mock data for pagination testing
    ...Array.from({ length: 15 }).map((_, i) => ({
        id: `ORD-540${i}`,
        status: (i % 3 === 0 ? "delivered" : "pending") as OrderStatus,
        timestamp: `Oct 01, 2025 · 10:00 AM`,
        customer: {
            groceryName: `Sample Store ${i}`,
            phoneNumber: "+15551234567",
            address: "123 Test Ave, Sample City, TX"
        },
        supplier: "Test Supplier LLC",
        items: generateMockItems(Math.floor(Math.random() * 10) + 1),
        totalValue: Math.floor(Math.random() * 1000) + 100
    }))
]
