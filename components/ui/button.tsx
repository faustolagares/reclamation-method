import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-libre uppercase tracking-[0.15em] font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-carbon-black-900 disabled:pointer-events-none disabled:opacity-40 rounded-[7px]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#35302C] text-ivory-mist-50 hover:bg-[#1a1715] active:bg-black border border-transparent",
        secondary:
          "bg-antique-white-200 text-[#35302C] hover:bg-antique-white-300 active:bg-antique-white-400 border border-transparent",
        tertiary:
          "bg-ivory-mist-100/60 text-[#35302C] hover:bg-ivory-mist-200 active:bg-ivory-mist-300 border border-transparent",
        outlined:
          "border border-[#35302C] text-[#35302C] bg-transparent hover:bg-[#35302C] hover:text-ivory-mist-50 active:bg-black active:border-black",
        ghost:
          "bg-transparent text-[#35302C] hover:bg-carbon-black-900/5 active:bg-carbon-black-900/10",
        link:
          "text-[#35302C] underline-offset-[6px] hover:underline active:text-black p-0 h-auto",
      },
      size: {
        sm: "h-8 px-5 text-[10px]",
        md: "h-11 px-8 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
