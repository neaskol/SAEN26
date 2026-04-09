import { forwardRef } from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "dark"
  href?: string
  size?: "sm" | "md" | "lg"
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-white/50 text-white bg-transparent hover:bg-white hover:text-dark active:scale-95",
  dark:
    "bg-dark text-white hover:bg-dark-800 active:scale-95 shadow-sm hover:shadow-md",
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, className = "", children, ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center rounded-full font-sans font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
      variantClasses[variant],
      sizeClasses[size],
      className,
    ].join(" ")

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
