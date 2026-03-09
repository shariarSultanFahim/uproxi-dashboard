"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addAreaSchema, type AddAreaValues } from "../schemas/zoning-schemas"

interface AddAreaFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export function AddAreaForm({ onSuccess, onCancel }: AddAreaFormProps) {
    const form = useForm<AddAreaValues>({
        resolver: zodResolver(addAreaSchema),
        defaultValues: {
            name: "",
            shortCode: "",
        },
    })

    const onSubmit = (data: AddAreaValues) => {
        console.log("Saved Area Form Data:", data)
        toast.success("Area created successfully!")
        form.reset()
        if (onSuccess) onSuccess()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col min-h-0">
                <div className="px-6 pb-6 space-y-5 flex-1">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Downtown" className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shortCode"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">Short Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. DXB-01" className="h-11 rounded-xl" {...field} />
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
                        Create Area
                    </SparkleButton>
                </div>
            </form>
        </Form>
    )
}
