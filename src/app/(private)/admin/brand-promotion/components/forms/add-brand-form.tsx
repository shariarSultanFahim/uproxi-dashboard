"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Upload } from "lucide-react"

const addBrandSchema = z.object({
    image: z.any().optional(), // File upload handling would go here
})

export type AddBrandValues = z.infer<typeof addBrandSchema>

interface AddBrandFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export function AddBrandForm({ onSuccess, onCancel }: AddBrandFormProps) {
    const form = useForm<AddBrandValues>({
        resolver: zodResolver(addBrandSchema),
        defaultValues: {},
    })

    const onSubmit = (data: AddBrandValues) => {
        console.log("Saved Brand Form Data:", data)
        toast.success("Brand added successfully!")
        form.reset()
        if (onSuccess) {
            onSuccess()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                        <FormItem>
                            <FormControl>
                                <div className="border-2 border-dashed border-sky-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors cursor-pointer bg-sky-50/50">
                                    <div className="bg-sky-100 p-3 rounded-full mb-4">
                                        <Upload className="h-6 w-6 text-sky-500" />
                                    </div>
                                    <p className="text-sm text-sky-500 font-medium">Upload Video or png.jpg</p>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center justify-between gap-4 pt-2">
                    <SparkleButton
                        type="button"
                        variant="outline"
                        className="w-full border-sky-200 text-sky-500 hover:bg-sky-50"
                        onClick={() => {
                            form.reset()
                            if (onCancel) onCancel()
                        }}
                    >
                        Cancel
                    </SparkleButton>
                    <SparkleButton type="submit" variant="default" className="w-full bg-sky-400 hover:bg-sky-500 text-white">
                        Add
                    </SparkleButton>
                </div>
            </form>
        </Form>
    )
}
