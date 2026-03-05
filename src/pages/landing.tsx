import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Zap,
  Shield,
  Layout,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  FileText,
} from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(253,230,138,0.05)_0%,rgba(255,212,0,0.02)_60%,rgba(255,195,0,0.05)_100%)]" />
      </div>

      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-primary-foreground">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">LifeOps</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-slide-up text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your life,{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                orchestrated
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-lg text-muted-foreground [animation-delay:0.1s]">
              Projects, content, finance, and health—unified under one intelligent AI layer.
              Permissioned agents suggest and act with full explainability. Reclaim control.
            </p>
            <div className="mt-10 flex animate-slide-up flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:0.2s]">
              <Link to="/signup">
                <Button size="lg" className="gap-2 text-base">
                  Start free trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features - Bento-style grid */}
        <section className="border-t border-border bg-card/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">
              One OS for your entire life
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Modular AI agents with explainable actions. Connect once, automate everywhere.
            </p>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Layout, title: 'Projects', desc: 'Plan, track, and ship with AI breakdowns and Kanban.' },
                { icon: FileText, title: 'Content', desc: 'Create, schedule, and publish across channels.' },
                { icon: BarChart3, title: 'Finance', desc: 'Track, forecast, and catch anomalies.' },
                { icon: Zap, title: 'Health', desc: 'Training plans, nutrition, and wearable sync.' },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className="animate-slide-up rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover [animation-delay:0.1s]"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <f.icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Explainability */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Explainable AI. You stay in control.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Every agent action includes a rationale, sources, and confidence score.
                  Approve or undo with one click. Full audit trails for compliance.
                </p>
                <ul className="mt-6 space-y-4">
                  {['Human-in-the-loop by default', 'Per-action rationale & sources', 'Undo where safe', 'GDPR-style export & delete'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Privacy-first design</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Encryption, minimal retention, and user consent flows. Your data stays yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary/10 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to reclaim control?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join thousands who've unified their life operations.
            </p>
            <Link to="/signup" className="mt-8 inline-block">
              <Button size="lg">Get started free</Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-sm text-muted-foreground">© LifeOps Personal</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">
                Help
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
