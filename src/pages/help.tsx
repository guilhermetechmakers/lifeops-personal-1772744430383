import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { HelpCircle, Book, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-primary-foreground">L</span>
            </div>
            <span className="font-bold text-foreground">LifeOps</span>
          </Link>
          <Link to="/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <HelpCircle className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-3xl font-bold text-foreground">Help & Support</h1>
          <p className="mt-2 text-muted-foreground">
            Docs, FAQs, and contact
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <Book className="h-10 w-10 text-primary" />
              <CardTitle>Knowledge base</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Guides and documentation for all features.
              </p>
              <Button variant="outline" className="mt-4">Browse docs</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MessageCircle className="h-10 w-10 text-primary" />
              <CardTitle>Contact support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get in touch with our team.
              </p>
              <form className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="How can we help?" />
                </div>
                <Button type="submit">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
