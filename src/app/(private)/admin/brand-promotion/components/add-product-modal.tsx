"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Plus, Upload } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const addProductSchema = z.object({
    image: z.any().optional(),
    name: z.string().min(1, "Product name is required"),
    stock: z.string().min(1, "Stock is required"),
    sku: z.string().min(1, "SKU is required"),
    regularPrice: z.string().min(1, "Regular price is required"),
    bulkPrice: z.string().min(1, "Bulk price is required"),
    bulkUnlockQuantity: z.string().min(1, "Bulk unlock quantity is required"),
})

export function AddProductModal() {
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof addProductSchema>>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            name: "",
            stock: "",
            sku: "",
            regularPrice: "",
            bulkPrice: "",
            bulkUnlockQuantity: "",
        },
    })

    const onSubmit = (data: z.infer<typeof addProductSchema>) => {
        console.log("Saved Product Data:", data)
        toast.success("Product added successfully!")
        form.reset()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <SparkleButton className="bg-sky-400 hover:bg-sky-500 text-white shadow-sm shadow-sky-200 gap-2">
                    <Plus className="w-4 h-4" />
                    Add product list
                </SparkleButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl rounded-2xl p-0 border-0 shadow-xl max-h-[90vh] flex flex-col overflow-hidden">
                <DialogHeader className="px-6 py-4 border-b border-slate-100 shrink-0">
                    <DialogTitle className="text-xl font-bold text-slate-900">Upload Product</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
                        <div className="px-6 py-4 space-y-5 overflow-y-auto flex-1">
                            <FormField
                                control={form.control}
                                name="image"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold text-slate-700">Product Image</FormLabel>
                                        <FormControl>
                                            <div className="border-2 border-dashed border-sky-300 rounded-xl py-6 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors cursor-pointer bg-sky-50/50">
                                                <div className="bg-sky-100 p-2.5 rounded-full mb-2">
                                                    <Upload className="h-5 w-5 text-sky-500" />
                                                </div>
                                                <p className="font-semibold text-slate-700 mb-1">Tap to upload</p>
                                                <p className="text-xs text-slate-400">png or jpg files</p>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold text-slate-700">Product Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Organic Avocados" className="h-11 rounded-xl" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="stock"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-slate-700">Stock</FormLabel>
                                            <FormControl>
                                                <Input placeholder="100" className="h-11 rounded-xl" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="sku"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-slate-700">SKU</FormLabel>
                                            <FormControl>
                                                <Input placeholder="P631W" className="h-11 rounded-xl" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="regularPrice"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-slate-700">Regular Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="$ 0.00" className="h-11 rounded-xl" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bulkPrice"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-slate-700">Bulk Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="$ 0.00" className="h-11 rounded-xl" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="bulkUnlockQuantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold text-slate-700">Bulk Unlock Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="100" className="h-11 rounded-xl" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="p-6 shrink-0 pt-2">
                            <SparkleButton type="submit" variant="default" className="w-full bg-sky-400 hover:bg-sky-500 text-white">
                                Save
                            </SparkleButton>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
