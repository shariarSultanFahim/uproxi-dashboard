"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addSupplierSchema, type AddSupplierValues } from "../schemas/zoning-schemas"

interface AddSupplierFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export function AddSupplierForm({ onSuccess, onCancel }: AddSupplierFormProps) {
    const form = useForm<AddSupplierValues>({
        resolver: zodResolver(addSupplierSchema),
        defaultValues: {
            supplierName: "",
            category: "",
        },
    })

    const onSubmit = (data: AddSupplierValues) => {
        console.log("Saved Supplier Form Data:", data)
        toast.success("Supplier created successfully!")
        form.reset()
        if (onSuccess) onSuccess()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col min-h-0">
                <div className="px-6 pb-6 space-y-5 flex-1">
                    <FormField
                        control={form.control}
                        name="supplierName"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">Supplier Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Grain Masters" className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">Category</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Grains & Pulses" className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex items-center justify-between gap-4 p-6 bg-slate-50/50 mt-auto shrink-0 rounded-b-2xl border-t">
                    <SparkleButton
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            form.reset()
                            if (onCancel) onCancel()
                        }}
                    >
                        Cancel
                    </SparkleButton>
                    <SparkleButton type="submit" variant="default" className="w-full">
                        Create Supplier
                    </SparkleButton>
                </div>
            </form>
        </Form>
    )
}
