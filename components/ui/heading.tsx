import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-serif font-medium tracking-tight text-balance",
  {
    variants: {
      level: {
        h1: "text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]",
        h2: "text-4xl md:text-5xl lg:text-6xl leading-[1.1]",
        h3: "text-3xl md:text-4xl lg:text-5xl leading-[1.1]",
        h4: "text-2xl md:text-3xl lg:text-4xl leading-[1.1]",
      },
    },
    defaultVariants: {
      level: "h2",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  asChild?: boolean
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : (as || level || "h2")
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"
