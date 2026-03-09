import { z } from "zod"

export const addZoneSchema = z.object({
    name: z.string().min(1, "Zone name is required"),
    shortCode: z.string().min(1, "Short code is required"),
})

export type AddZoneValues = z.infer<typeof addZoneSchema>

export const addAreaSchema = z.object({
    name: z.string().min(1, "Area name is required"),
    shortCode: z.string().min(1, "Short code is required"),
})

export type AddAreaValues = z.infer<typeof addAreaSchema>

export const addSupplierSchema = z.object({
    supplierName: z.string().min(1, "Supplier name is required"),
    category: z.string().min(1, "Category is required"),
})

export type AddSupplierValues = z.infer<typeof addSupplierSchema>
