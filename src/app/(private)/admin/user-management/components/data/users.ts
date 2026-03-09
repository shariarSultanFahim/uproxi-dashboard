export type UserRole = "Grocerymarket" | "Supplier"
export type UserStatus = "Active" | "Suspended" | "Pending"

export interface User {
    id: string
    businessName: string
    location: string // e.g., 'Downtown District', 'Westside'
    role: UserRole
    contactName: string
    email: string
    status: UserStatus
    avatarUrl: string
    area: string
    city: string
}

export const mockUsers: User[] = [
    // Active Directory - Active
    {
        id: "user-1",
        businessName: "Metro Mart",
        location: "Downtown District",
        role: "Grocerymarket",
        contactName: "John Doe",
        email: "john@metromart.com",
        status: "Active",
        avatarUrl: "https://i.pravatar.cc/150?u=user-1",
        area: "Downtown",
        city: "Dubai"
    },
    {
        id: "user-2",
        businessName: "Fresh Farms LLC",
        location: "Valley Region",
        role: "Supplier",
        contactName: "Sarah Smith",
        email: "sarah@freshfarms.com",
        status: "Active",
        avatarUrl: "https://i.pravatar.cc/150?u=user-2",
        area: "Valley",
        city: "Dubai"
    },
    {
        id: "user-3",
        businessName: "City Grocers",
        location: "Westside",
        role: "Grocerymarket",
        contactName: "Mike Ross",
        email: "mike@citygrocers.com",
        status: "Active",
        avatarUrl: "https://i.pravatar.cc/150?u=user-3",
        area: "West",
        city: "Dubai"
    },
    // Active Directory - Suspended
    {
        id: "user-4",
        businessName: "Grain Masters",
        location: "North Hills",
        role: "Supplier",
        contactName: "Alan Green",
        email: "alan@grainmasters.com",
        status: "Suspended",
        avatarUrl: "https://i.pravatar.cc/150?u=user-4",
        area: "North",
        city: "Dubai"
    },
    // Active Directory - Extra for pagination mapping
    {
        id: "user-5",
        businessName: "Sunrise Market",
        location: "Eastside",
        role: "Grocerymarket",
        contactName: "Emily Wong",
        email: "emily@sunrisemarket.com",
        status: "Active",
        avatarUrl: "https://i.pravatar.cc/150?u=user-5",
        area: "East",
        city: "Abu Dhabi"
    },
    {
        id: "user-6",
        businessName: "Ocean Catch",
        location: "Marina District",
        role: "Supplier",
        contactName: "David Fisher",
        email: "david@oceancatch.com",
        status: "Active",
        avatarUrl: "https://i.pravatar.cc/150?u=user-6",
        area: "Marina",
        city: "Dubai"
    },

    // New Requests - Pending
    {
        id: "user-7",
        businessName: "City Grocers (New Request)",
        location: "Westside",
        role: "Grocerymarket",
        contactName: "Mike Ross",
        email: "mike@citygrocers.com",
        status: "Pending",
        avatarUrl: "https://i.pravatar.cc/150?u=user-7",
        area: "West",
        city: "Dubai"
    },
    {
        id: "user-8",
        businessName: "Global Spices",
        location: "Old Town",
        role: "Supplier",
        contactName: "Amir Khan",
        email: "amir@globalspices.com",
        status: "Pending",
        avatarUrl: "https://i.pravatar.cc/150?u=user-8",
        area: "Old Town",
        city: "Sharjah"
    },
    {
        id: "user-9",
        businessName: "Organics Co.",
        location: "Green Village",
        role: "Supplier",
        contactName: "Lily Evans",
        email: "lily@organicsco.com",
        status: "Pending",
        avatarUrl: "https://i.pravatar.cc/150?u=user-9",
        area: "Green Village",
        city: "Dubai"
    }
]
