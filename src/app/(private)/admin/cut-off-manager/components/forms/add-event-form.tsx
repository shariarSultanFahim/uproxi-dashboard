"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Upload, Save } from "lucide-react"

import { addEventSchema, type AddEventValues } from "../schemas/add-event-schema"

interface AddEventFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export function AddEventForm({ onSuccess, onCancel }: AddEventFormProps) {
    const form = useForm<AddEventValues>({
        resolver: zodResolver(addEventSchema),
        defaultValues: {
            title: "",
            date: "",
            time: "",
            description: "",
        },
    })

    const onSubmit = (data: AddEventValues) => {
        console.log("Saved Event Form Data:", data)
        toast.success("Special event schedule saved successfully!")
        form.reset()
        if (onSuccess) {
            onSuccess()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col overflow-hidden min-h-0">
                <div className="px-6 pb-6 space-y-5 overflow-y-auto flex-1">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">Event Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Ramadan Preparation" className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="text-sm font-semibold text-slate-700">Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" className="h-11 rounded-xl" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="text-sm font-semibold text-slate-700">Cut-off Time</FormLabel>
                                    <FormControl>
                                        <Input type="time" className="h-11 rounded-xl" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-slate-700">Cover Photo</Label>
                        <div className="border-2 border-dashed border-sky-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors cursor-pointer group">
                            <div className="bg-sky-100 p-2.5 rounded-full mb-3 group-hover:bg-sky-200 transition-colors">
                                <Upload className="h-5 w-5 text-sky-500" />
                            </div>
                            <p className="font-semibold text-slate-700 mb-1">Tap to upload</p>
                            <p className="text-xs text-slate-400">png, jpg</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-slate-700">Product List</Label>
                        <div className="border-2 border-dashed border-sky-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors cursor-pointer group">
                            <div className="bg-sky-100 p-2.5 rounded-full mb-3 group-hover:bg-sky-200 transition-colors">
                                <Upload className="h-5 w-5 text-sky-500" />
                            </div>
                            <p className="font-semibold text-slate-700 mb-1">Tap to upload</p>
                            <p className="text-xs text-slate-400">xlsx , pdf</p>
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel className="text-sm font-semibold text-slate-700">
                                    Description <span className="text-slate-400 font-normal">(Optional)</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Brief description about the event schedule adjustment..."
                                        className="resize-none h-24 rounded-xl"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex items-center justify-between gap-4 p-6 bg-slate-50/50 mt-auto shrink-0 border-t">
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
                        <Save className="w-4 h-4 mr-1.5" />
                        Save Event
                    </SparkleButton>
                </div>
            </form>
        </Form>
    )
}
