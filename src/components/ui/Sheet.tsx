import { cn } from '@/lib/utils'

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  if (!open) return null
  
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      {/* Sheet Content */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-background border-l border-border flex flex-col shadow-lg transition-transform duration-300 transform translate-x-0"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-1.5 p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function SheetTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-xl font-semibold text-foreground', className)} {...props}>
      {children}
    </h2>
  )
}

export function SheetClose({ className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'absolute top-4 right-4 rounded-md opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        className
      )}
      onClick={onClick}
      aria-label="Close menu"
      {...props}
    >
      <svg
        className="h-5 w-5 text-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  )
}

