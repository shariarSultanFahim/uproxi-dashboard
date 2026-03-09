import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Sparkles } from "lucide-react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const sparkleButtonVariants = cva(
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden px-8 py-2 md:px-12 md:py-3 md:h-14",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-[#4FCAFE] to-[#39B5F9] text-white shadow-md hover:from-[#39B5F9] hover:to-[#22A0E6] focus-visible:ring-sky-400",
                outline:
                    "border-[1.5px] border-[#4FCAFE] bg-white text-[#4FCAFE] hover:bg-sky-50 shadow-sm focus-visible:ring-sky-400",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface SparkleButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sparkleButtonVariants> {
    asChild?: boolean
}

const SparkleButton = React.forwardRef<HTMLButtonElement, SparkleButtonProps>(
    ({ className, variant, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const isOutline = variant === "outline"

        const sparkleColorClass = isOutline
            ? "text-[#4FCAFE] drop-shadow-[0_0_6px_rgba(79,202,254,0.6)]"
            : "text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"

        return (
            <Comp
                className={cn(sparkleButtonVariants({ variant, className }))}
                ref={ref}
                {...props}
            >
                {/* Top Left Sparkle */}
                <div className="absolute top-1.5 left-2 md:top-2 md:left-3 aspect-square">
                    <Sparkles
                        className={cn("w-4 h-4 md:w-5 md:h-5 stroke-[1.5]", sparkleColorClass)}
                    />
                </div>

                {/* Top Right Sparkle (Flipped) */}
                <div className="absolute top-1.5 right-2 md:top-2 md:right-3 aspect-square">
                    <Sparkles
                        className={cn("w-4 h-4 md:w-5 md:h-5 stroke-[1.5] scale-x-[-1]", sparkleColorClass)}
                    />
                </div>

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-2 mt-0.5">
                    {children}
                </span>
            </Comp>
        )
    }
)
SparkleButton.displayName = "SparkleButton"

export { SparkleButton, sparkleButtonVariants }
