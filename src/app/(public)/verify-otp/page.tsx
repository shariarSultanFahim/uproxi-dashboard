"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const verifyOtpSchema = z.object({
  otp: z.string().length(5, { message: "Please enter all 5 digits" }),
})

export default function VerifyOtpPage() {
  const router = useRouter()
  const [otpValues, setOtpValues] = React.useState(["", "", "", "", ""])
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const form = useForm<z.infer<typeof verifyOtpSchema>>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  })

  // Sync internal array state with react-hook-form
  React.useEffect(() => {
    form.setValue("otp", otpValues.join(""))
  }, [otpValues, form])

  function handleChange(index: number, value: string) {
    if (value.length > 1) {
      value = value.slice(-1) // Take only the last character if multiple are pasted
    }
    const newOtp = [...otpValues]
    newOtp[index] = value
    setOtpValues(newOtp)

    // Auto-advance
    if (value !== "" && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && otpValues[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  function onSubmit(values: z.infer<typeof verifyOtpSchema>) {
    // Mock submit
    console.log("OTP Verified", values)
    // Redirect to Set Password
    router.push("/set-password")
  }

  return (
    <div className="w-full max-w-md space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <Image src="/logo.svg" alt="UPROXI Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-2xl font-semibold tracking-tight">Verify Reset Password</h1>
        <p className="text-sm text-muted-foreground">Enter the code sent to your email to reset your password.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="otp"
            render={() => (
              <FormItem className="flex flex-col justify-center space-y-0">
                <FormControl>
                  <div className="flex items-center gap-3">
                    {otpValues.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-14 h-14 text-center text-xl font-semibold border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ebcf7] focus:border-transparent transition-all"
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-center mt-2" />
              </FormItem>
            )}
          />

          <div className="space-y-3 pt-4">
            <Button type="submit" className="w-full h-11 bg-[#3ebcf7] hover:bg-[#2fa0da] text-white shadow-[0_4px_14px_0_rgba(62,188,247,0.39)] transition-all font-semibold rounded-md relative overflow-hidden group">
              <span className="relative flex items-center gap-2 justify-center z-10">
                Verify Code
                <svg className="absolute w-4 h-4 left-2 top-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
                <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-50" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
              </span>
            </Button>

            <Button asChild variant="outline" className="w-full h-11 border-slate-200 font-semibold rounded-md text-[#3ebcf7] hover:text-[#2fa0da] relative overflow-hidden group">
              <Link href="/login">
                <span className="relative flex items-center gap-2 justify-center z-10">
                  Back to login
                  <svg className="absolute w-4 h-4 left-2 top-0 opacity-20 text-[#3ebcf7]" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
                  <svg className="absolute w-4 h-4 right-2 bottom-0 opacity-20 text-[#3ebcf7]" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" /></svg>
                </span>
              </Link>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-2">
            Resend code in <span className="font-semibold text-slate-700">00 : 56</span>
          </div>
        </form>
      </Form>
    </div>
  )
}
