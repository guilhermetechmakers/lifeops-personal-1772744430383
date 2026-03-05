import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FolderKanban, FileText, Wallet, Heart, Check, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const modules = [
  { id: 'projects', icon: FolderKanban, label: 'Projects', desc: 'Plan and track work' },
  { id: 'content', icon: FileText, label: 'Content', desc: 'Create and publish' },
  { id: 'finance', icon: Wallet, label: 'Finance', desc: 'Track and forecast' },
  { id: 'health', icon: Heart, label: 'Health', desc: 'Workouts and nutrition' },
]

export function OnboardingPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const toggle = (id: string) => {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    )
  }

  const handleContinue = () => {
    if (step === 1) setStep(2)
    else navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground">
            {step === 1 ? 'Choose your modules' : 'Permission walkthrough'}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {step === 1
              ? 'Select the areas you want to manage with LifeOps'
              : 'Agents suggest by default. You approve before they act.'}
          </p>
        </div>

        {step === 1 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => toggle(m.id)}
                className={cn(
                  'flex items-start gap-4 rounded-xl border p-4 text-left transition-all',
                  selected.includes(m.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                )}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg',
                    selected.includes(m.id) ? 'bg-primary' : 'bg-muted'
                  )}
                >
                  <m.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{m.label}</p>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
                {selected.includes(m.id) && (
                  <Check className="ml-auto h-5 w-5 text-primary" />
                )}
              </button>
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Agent permissions</CardTitle>
              <CardDescription>
                AI agents can suggest actions. You decide whether to approve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Suggest by default
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Require approval for actions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Full explainability and undo
                </li>
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 flex justify-end">
          <Button onClick={handleContinue} className="gap-2">
            {step === 1 ? 'Continue' : 'Go to Dashboard'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
