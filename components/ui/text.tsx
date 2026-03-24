import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "font-sans font-normal",
  {
    variants: {
      variant: {
        body: "text-sm md:text-base leading-relaxed tracking-wide",
        support: "text-xs md:text-sm leading-relaxed tracking-wide",
        editorial: "font-serif text-2xl md:text-3xl leading-relaxed",
        quote: "font-serif text-4xl md:text-6xl lg:text-7xl font-medium italic leading-[1.1] tracking-tight",
      },
    },
    defaultVariants: {
      variant: "body",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType
  asChild?: boolean
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, as: Comp = "p", asChild, ...props }, ref) => {
    const Component = asChild ? Slot : Comp
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"
