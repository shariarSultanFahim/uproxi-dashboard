import * as z from "zod"

export const addEventSchema = z.object({
    title: z.string().min(1, "Event title is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    description: z.string().optional(),
})

export type AddEventValues = z.infer<typeof addEventSchema>
