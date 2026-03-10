"use client"

import { useState } from "react"
import { Tag, DollarSign, CalendarIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    date: z.date("Date is required."),
    description: z.string().min(2, "Description must be at least 2 characters."),
    category: z.string().min(2, "Category must be at least 2 characters."),
    amount: z.number("Amount is required.").min(0.01, "Amount must be greater than 0"),
})

export function AddCostModal({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            category: "",
            amount: 0,
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Saving cost:", values)
        setOpen(false)
        form.reset()
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        if (!newOpen) {
            form.reset()
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[400px] rounded-3xl p-6 border-slate-100 shadow-2xl bg-white focus:outline-none focus-visible:outline-none">
                <div className="flex justify-between items-center mb-6">
                    <DialogTitle className="text-xl font-bold text-[#202c45]">Add Daily Cost</DialogTitle>

                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

                        {/* Date Field */}
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-2">
                                    <FormLabel className="text-[14px] font-bold text-[#202c45] p-0">Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full h-11 pl-10 pr-4 rounded-xl text-[14px] font-medium text-left bg-white justify-start focus:outline-none focus:ring-2 focus:ring-[#3dbcf9]/20 focus:border-[#3dbcf9] hover:bg-slate-50",
                                                        !field.value && "text-slate-300"
                                                    )}
                                                >
                                                    <CalendarIcon className="w-4 h-4 text-[#8e98a8]" />
                                                    {field.value ? (
                                                        <span className="text-[#475467]">{format(field.value, "PPP")}</span>
                                                    ) : (
                                                        <span>Select Date</span>
                                                    )}
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 rounded-xl border-slate-100 shadow-xl" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage className="text-xs text-red-500 font-medium" />
                                </FormItem>
                            )}
                        />

                        {/* Description Field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1.5">
                                    <FormLabel className="text-[14px] font-bold text-[#202c45] p-0">Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="e.g. Delivery Fees"
                                            className="w-full h-11 px-4 rounded-xl"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-500 font-medium" />
                                </FormItem>
                            )}
                        />

                        {/* Category Field */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1.5">
                                    <FormLabel className="text-[14px] font-bold text-[#202c45] p-0">Category</FormLabel>
                                    <div className="relative">
                                        <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8e98a8]" />
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Select Category"
                                                className="w-full h-11 pl-10 pr-4 rounded-xl"
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="text-xs text-red-500 font-medium" />
                                </FormItem>
                            )}
                        />

                        {/* Amount Field */}
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1.5 mb-2">
                                    <FormLabel className="text-[14px] font-bold text-[#202c45] p-0">Amount ($)</FormLabel>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8e98a8]" />
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="number"
                                                step="0.01"
                                                placeholder="0.00"
                                                value={field.value || ""}
                                                onChange={(e) => field.onChange(e.target.value === "" ? 0 : Number(e.target.value))}
                                                className="w-full h-11 pl-10 pr-4 rounded-xl"
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="text-xs text-red-500 font-medium" />
                                </FormItem>
                            )}
                        />

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className="flex-1 rounded-xl h-11">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="flex-1 rounded-xl h-11"
                            >
                                Save Cost
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
