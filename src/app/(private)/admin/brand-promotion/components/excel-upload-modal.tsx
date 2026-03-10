"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Upload } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const excelUploadSchema = z.object({
    file: z.any().optional(),
})

export function ExcelUploadModal() {
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof excelUploadSchema>>({
        resolver: zodResolver(excelUploadSchema),
        defaultValues: {},
    })

    const onSubmit = (data: z.infer<typeof excelUploadSchema>) => {
        console.log("Uploaded Excel Data:", data)
        toast.success("Excel file uploaded successfully!")
        form.reset()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <SparkleButton className="bg-sky-400 hover:bg-sky-500 text-white shadow-sm shadow-sky-200 gap-2">
                    Upload Excel
                </SparkleButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl p-6 border-0 shadow-xl gap-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-slate-900">Excel Upload</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="file"
                            render={() => (
                                <FormItem>
                                    <FormControl>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-600 mb-2">Excel File</p>
                                            <div className="border-2 border-dashed border-sky-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors cursor-pointer bg-sky-50/50">
                                                <div className="bg-sky-100 p-3 rounded-full mb-3">
                                                    <Upload className="h-5 w-5 text-sky-500" />
                                                </div>
                                                <p className="font-semibold text-slate-700 mb-1">Tap to upload</p>
                                                <p className="text-xs text-slate-400">xlsx or .csv files</p>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <SparkleButton type="submit" variant="default" className="w-full bg-sky-400 hover:bg-sky-500 text-white block mt-6">
                            Upload
                        </SparkleButton>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
