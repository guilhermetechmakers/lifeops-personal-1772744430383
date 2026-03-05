import { Link } from 'react-router-dom'
import {
  FolderKanban,
  FileText,
  Wallet,
  Heart,
  Plus,
  TrendingUp,
  Bell,
  HelpCircle,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockActivity = [
  { name: 'Mon', projects: 2, tasks: 5 },
  { name: 'Tue', projects: 3, tasks: 8 },
  { name: 'Wed', projects: 2, tasks: 4 },
  { name: 'Thu', projects: 4, tasks: 12 },
  { name: 'Fri', projects: 3, tasks: 7 },
  { name: 'Sat', projects: 1, tasks: 2 },
  { name: 'Sun', projects: 2, tasks: 6 },
]

const mockAiActions = [
  { id: '1', action: 'Suggested calendar event for project milestone', rationale: 'Based on your project timeline', time: '2h ago', canUndo: true },
  { id: '2', action: 'Flagged unusual transaction', rationale: 'Amount 2x your average', time: '5h ago', canUndo: true },
]

const moduleShortcuts = [
  { to: '/dashboard/projects/new', icon: FolderKanban, label: 'New Project', color: 'bg-primary/20 text-primary' },
  { to: '/dashboard/content/new', icon: FileText, label: 'New Content', color: 'bg-blue-100 text-blue-700' },
  { to: '/dashboard/finance/budget', icon: Wallet, label: 'New Budget', color: 'bg-green-100 text-green-700' },
  { to: '/dashboard/health/workout', icon: Heart, label: 'Log Workout', color: 'bg-rose-100 text-rose-700' },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Your unified control center for Projects, Content, Finance, and Health
        </p>
      </div>

      {/* Summary cards - Bento-style */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Active Projects', value: '12', trend: '+2', to: '/dashboard/projects' },
          { label: 'Content Pieces', value: '8', trend: '+1', to: '/dashboard/content' },
          { label: 'Budget Health', value: '92%', trend: '+5%', to: '/dashboard/finance' },
          { label: 'Workouts This Week', value: '4', trend: 'On track', to: '/dashboard/health' },
        ].map((m) => (
          <Link key={m.label} to={m.to}>
            <Card className="transition-all duration-200 hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {m.label}
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{m.value}</div>
                <p className="text-xs text-muted-foreground">{m.trend}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Activity chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>Tasks and projects this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockActivity}>
                  <defs>
                    <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgb(255, 212, 0)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="rgb(255, 212, 0)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgb(230, 232, 236)" />
                  <XAxis dataKey="name" stroke="rgb(91, 95, 104)" fontSize={12} />
                  <YAxis stroke="rgb(91, 95, 104)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid rgb(230, 232, 236)',
                      borderRadius: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="tasks"
                    stroke="rgb(255, 212, 0)"
                    strokeWidth={2}
                    fill="url(#colorTasks)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Create or log something new</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            {moduleShortcuts.map((s) => (
              <Link key={s.label} to={s.to}>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  {s.label}
                  <Plus className="ml-auto h-4 w-4" />
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Explainability panel */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Recent AI Decisions
            </CardTitle>
            <CardDescription>
              Review rationale and undo where needed
            </CardDescription>
          </div>
          <Link to="/dashboard/notifications">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
              View all
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAiActions.map((a) => (
              <div
                key={a.id}
                className="flex flex-col gap-2 rounded-xl border border-border p-4 transition-colors hover:bg-accent/10"
              >
                <p className="font-medium text-foreground">{a.action}</p>
                <p className="text-sm text-muted-foreground">Why: {a.rationale}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      Why
                    </Button>
                    {a.canUndo && (
                      <Button variant="outline" size="sm">
                        Undo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
