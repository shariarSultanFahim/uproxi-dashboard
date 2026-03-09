import * as React from "react"

import { cn } from "@/lib/utils"
import { CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui"

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description?: string
    children?: React.ReactNode
}

export function PageHeader({
    className,
    title,
    description,
    children,
    ...props
}: PageHeaderProps) {
    return (
        <CardHeader className={cn("px-0 pb-4 md:pb-6", className)} {...props}>
            <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
            {description && <CardDescription className="text-sm md:text-base">{description}</CardDescription>}
            {children && (
                <CardAction>
                    <div className="flex items-center gap-2">
                        {children}
                    </div>
                </CardAction>
            )}
        </CardHeader>
    )
}
