"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
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

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export default function ForgotPasswordPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    // Mock submit
    console.log(values)
    // Redirect to Verify OTP
    router.push("/verify-otp")
  }

  return (
    <div className="w-full max-w-sm space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <Image src="/logo.svg" alt="UPROXI Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-2xl font-semibold tracking-tight">Reset Password</h1>
        <p className="text-sm text-muted-foreground">Enter the email address associated with your account.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="h-11 rounded-md bg-white border-slate-200" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-3">
            <Button type="submit" className="w-full h-11 bg-[#3ebcf7] hover:bg-[#2fa0da] text-white shadow-[0_4px_14px_0_rgba(62,188,247,0.39)] transition-all font-semibold rounded-md relative overflow-hidden group">
                <span className="relative flex items-center gap-2 justify-center z-10">
                    Reset Password
                    <svg className="absolute w-4 h-4 left-2 top-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
                    <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
                </span>
            </Button>

            <Button asChild variant="outline" className="w-full h-11 border-slate-200 font-semibold rounded-md text-[#3ebcf7] hover:text-[#2fa0da] relative overflow-hidden group">
              <Link href="/login">
                <span className="relative flex items-center gap-2 justify-center z-10">
                    Back to login
                    <svg className="absolute w-4 h-4 left-2 top-0 opacity-20 text-[#3ebcf7]" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
                    <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-20 text-[#3ebcf7]" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/></svg>
                </span>
              </Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
