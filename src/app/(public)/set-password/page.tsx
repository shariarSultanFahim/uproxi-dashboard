"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const setPasswordSchema = z.object({
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // path of error
})

export default function SetPasswordPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof setPasswordSchema>>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof setPasswordSchema>) {
    // Mock submit
    console.log("Password reset successful", values)
    // Redirect to Login
    router.push("/login")
  }

  return (
    <div className="w-full max-w-sm space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <Image src="/logo.svg" alt="UPROXI Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-2xl font-semibold tracking-tight">Set New Password</h1>
        <p className="text-sm text-muted-foreground">Enter your new password to complete the reset</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your new pass" {...field} className="h-11 rounded-md bg-white border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">Confirm New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Re-enter your new pass" {...field} className="h-11 rounded-md bg-white border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-3 pt-2">
            <Button type="submit" className="w-full h-11 bg-[#3ebcf7] hover:bg-[#2fa0da] text-white shadow-[0_4px_14px_0_rgba(62,188,247,0.39)] transition-all font-semibold rounded-md relative overflow-hidden group">
              <span className="relative flex items-center gap-2 justify-center z-10">
                Complete Reset
                <svg className="absolute w-4 h-4 left-2 top-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
                <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
