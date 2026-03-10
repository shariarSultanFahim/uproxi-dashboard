export type RequestType = "individual" | "bulk"

export interface ApprovalRequest {
    id: string
    type: RequestType
    title: string
    subtitle: string
    timestamp: string

    // For Individual
    imageUrl?: string
    price?: number
    bulkPrice?: number
    category?: string

    // For Bulk
    itemCount?: number
    fileSize?: string
    supplier?: string
}

export const mockApprovalRequests: ApprovalRequest[] = [
    {
        id: "req-1",
        type: "individual",
        title: "Organic Matcha Powder",
        subtitle: "Zen Teas Ltd.",
        category: "BEVERAGES",
        timestamp: "2023-10-25 09:30 AM",
        imageUrl: "https://placehold.co/400x400/222d4f/ffffff?text=Matcha",
        price: 12.50,
        bulkPrice: 10.00
    },
    {
        id: "req-2",
        type: "bulk",
        title: "Q4_New_Arrivals.xlsx",
        subtitle: "Global Foods Inc.",
        timestamp: "2023-10-25 10:00 AM",
        itemCount: 45,
        fileSize: "2.4 MB",
        supplier: "Global Foods Inc."
    },
    {
        id: "req-3",
        type: "individual",
        title: "Artisan Sourdough Bread",
        subtitle: "Crust & Crumb",
        category: "BAKERY",
        timestamp: "2023-10-25 11:15 AM",
        imageUrl: "https://placehold.co/400x400/222d4f/ffffff?text=Bread",
        price: 8.00,
        bulkPrice: 6.50
    },
    {
        id: "req-4",
        type: "bulk",
        title: "Seasonal_Veg_List_v2.xlsx",
        subtitle: "Fresh Valley Produce",
        timestamp: "2023-10-24 02:30 PM",
        itemCount: 128,
        fileSize: "5.1 MB",
        supplier: "Fresh Valley Produce"
    },
    // Approved products for Product List tab
    {
        id: "prod-1",
        type: "individual",
        title: "Organic Matcha Powder",
        subtitle: "Kyoto, Japan",
        category: "Beverages",
        timestamp: "2023-10-20 09:00 AM",
        imageUrl: "https://placehold.co/400x400/8db37b/ffffff?text=Matcha",
        price: 12.50,
        bulkPrice: 10.00,
        supplier: "sales@zenteas.com"
    },
    {
        id: "prod-2",
        type: "individual",
        title: "Artisan Sourdough",
        subtitle: "San Francisco, CA",
        category: "Bakery",
        timestamp: "2023-10-21 10:15 AM",
        imageUrl: "https://placehold.co/400x400/9e7c65/ffffff?text=Bread",
        price: 8.00,
        bulkPrice: 6.50,
        supplier: "orders@crustcrumb.com"
    },
    {
        id: "prod-3",
        type: "individual",
        title: "Fresh Strawberries",
        subtitle: "Watsonville, CA",
        category: "Produce",
        timestamp: "2023-10-22 08:30 AM",
        imageUrl: "https://placehold.co/400x400/d95e5e/ffffff?text=Berries",
        price: 5.99,
        bulkPrice: 4.50,
        supplier: "hello@berryfresh.com"
    },
    {
        id: "prod-4",
        type: "individual",
        title: "Arabica Coffee Beans",
        subtitle: "Bogota, Colombia",
        category: "Pantry",
        timestamp: "2023-10-23 11:45 AM",
        imageUrl: "https://placehold.co/400x400/4a3b32/ffffff?text=Coffee",
        price: 18.00,
        bulkPrice: 15.00,
        supplier: "import@beanmasters.com"
    }
]
