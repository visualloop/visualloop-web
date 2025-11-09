import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted')
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={cn(
            'w-full px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            'transition-all duration-300 ease-in-out'
          )}
          placeholder="Your name"
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={cn(
            'w-full px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            'transition-all duration-300 ease-in-out'
          )}
          placeholder="your.email@example.com"
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={cn(
            'w-full px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            'transition-all duration-300 ease-in-out resize-y'
          )}
          placeholder="Tell us about your project..."
          required
          aria-required="true"
        />
      </div>
      <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  )
}

