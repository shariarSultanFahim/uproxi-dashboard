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
    dateOfBirth: string
    phone: string
    address: string
    licenseUrl: string
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
        city: "Dubai",
        dateOfBirth: "1985-04-23",
        phone: "+1 234 567 890",
        address: "123 Main St, Suite 400, New York, NY 10001",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Mock document image
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
        city: "Dubai",
        dateOfBirth: "1990-11-15",
        phone: "+1 987 654 321",
        address: "456 Farm Rd, Valley Region",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Dubai",
        dateOfBirth: "1988-07-02",
        phone: "+1 555 123 4567",
        address: "789 West Blvd, Westside",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Dubai",
        dateOfBirth: "1975-09-30",
        phone: "+1 333 444 5555",
        address: "101 Wheat Ave, North Hills",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Abu Dhabi",
        dateOfBirth: "1992-02-14",
        phone: "+1 888 777 6666",
        address: "22 Sunrise Pl, Eastside",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Dubai",
        dateOfBirth: "1980-05-10",
        phone: "+1 222 333 4444",
        address: "99 Wharf Way, Marina",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Dubai",
        dateOfBirth: "1988-07-02",
        phone: "+1 555 123 4567",
        address: "789 West Blvd, Westside",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Sharjah",
        dateOfBirth: "1982-12-05",
        phone: "+1 777 888 9999",
        address: "55 Spice Bazaar, Old Town",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        city: "Dubai",
        dateOfBirth: "1995-08-20",
        phone: "+1 666 555 4444",
        address: "33 Eco Path, Green Village",
        licenseUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
