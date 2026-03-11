"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false).optional(),
})

export default function LoginPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Mock login submission
    console.log(values)
    // Redirect to admin dashboard
    router.push("/admin")
  }

  return (
    <div className="w-full max-w-sm space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <Image src="/logo.svg" alt="UPROXI Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">Login to your account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} className="h-11 rounded-md bg-white border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} className="h-11 rounded-md bg-white border-slate-200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-slate-300 rounded-[4px]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Remember Password
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-slate-700 hover:text-blue-500 underline underline-offset-4"
            >
              Forgot Password
            </Link>
          </div>

          <Button type="submit" className="w-full h-11 bg-[#3ebcf7] hover:bg-[#2fa0da] text-white shadow-[0_4px_14px_0_rgba(62,188,247,0.39)] transition-all font-semibold rounded-md relative overflow-hidden group">
            <span className="relative flex items-center gap-2 justify-center z-10">
              Login
              <svg className="absolute w-4 h-4 left-2 top-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
              <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
            </span>
          </Button>
        </form>
      </Form>
    </div>
  )
}
