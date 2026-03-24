import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "relative z-10",
  {
    variants: {
      spacing: {
        default: "py-32 md:py-48",
        compact: "py-16 md:py-24",
        spacious: "py-32 md:py-56",
        none: "",
      },
      background: {
        default: "bg-ivory-mist-50",
        light: "bg-antique-white-50",
        muted: "bg-antique-white-100",
        dark: "bg-carbon-black-900",
        darker: "bg-carbon-black-950",
        transparent: "bg-transparent",
      }
    },
    defaultVariants: {
      spacing: "default",
      background: "transparent",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "section"
    return (
      <Comp
        ref={ref}
        className={cn(sectionVariants({ spacing, background, className }))}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

const containerVariants = cva(
  "mx-auto px-8 md:px-16",
  {
    variants: {
      size: {
        default: "max-w-7xl",
        small: "max-w-4xl",
        large: "max-w-[90rem]",
        full: "w-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"
