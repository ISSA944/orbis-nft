import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'outline' | 'ghost'
type Size = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  default: 'bg-white text-black hover:bg-neutral-200',
  outline: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40',
  ghost: 'text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  default: 'h-10 px-4 text-sm',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', className, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    />
  )
)
Button.displayName = 'Button'
