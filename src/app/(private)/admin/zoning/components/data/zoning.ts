export interface Supplier {
    id: string
    name: string
    category: string
    active?: boolean // used for tracking state in the UI checkboxes
}

export interface Area {
    id: string
    name: string
    shortCode: string
    suppliers: Supplier[]
}

export interface Zone {
    id: string
    name: string
    shortCode: string
    areas: Area[]
}

export const mockZones: Zone[] = [
    {
        id: "zone-1",
        name: "Downtown Operations",
        shortCode: "DXB-DT",
        areas: [
            {
                id: "area-1",
                name: "asdas",
                shortCode: "ASSDAS",
                suppliers: [
                    { id: "sup-1", name: "Fresh Farms LLC", category: "Fresh Produce", active: false },
                    { id: "sup-2", name: "Grain Masters", category: "Grains & Pulses", active: false },
                    { id: "sup-3", name: "Ocean Catch", category: "Seafood", active: false },
                    { id: "sup-4", name: "Dairy Delight", category: "Dairy", active: false },
                    { id: "sup-5", name: "Spice Route", category: "Spices", active: false },
                    { id: "sup-6", name: "Green Valley", category: "Fresh Produce", active: false },
                    { id: "sup-7", name: "dasdas", category: "Dairy", active: false },
                    { id: "sup-8", name: "axadasd", category: "Fresh Produce", active: false },
                ]
            },
            {
                id: "area-2",
                name: "ddsa",
                shortCode: "ADFAFSD",
                suppliers: [
                    { id: "sup-9", name: "Supplier A", category: "Meat", active: false },
                    { id: "sup-10", name: "Supplier B", category: "Poultry", active: false },
                ]
            }
        ]
    },
    {
        id: "zone-2",
        name: "Marina District",
        shortCode: "DXB-MR",
        areas: []
    },
    {
        id: "zone-3",
        name: "Onigashima Island",
        shortCode: "onigashima",
        areas: []
    }
]
