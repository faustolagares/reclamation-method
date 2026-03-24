import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const eyebrowVariants = cva(
  "text-xs uppercase tracking-[0.25em]",
  {
    variants: {
      variant: {
        default: "text-carbon-black-900",
        light: "text-ivory-mist-50",
        muted: "text-carbon-black-600",
        accent: "text-antique-white-600",
        "accent-light": "text-antique-white-300",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface EyebrowProps 
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof eyebrowVariants> {
  as?: React.ElementType
  asChild?: boolean
}

export const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, variant, as: Comp = "span", asChild, ...props }, ref) => {
    const Component = asChild ? Slot : Comp
    return (
      <Component
        ref={ref}
        className={cn(eyebrowVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Eyebrow.displayName = "Eyebrow"
