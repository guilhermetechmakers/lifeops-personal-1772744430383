import { Link } from 'react-router-dom'
import { Activity, Heart, Moon, Footprints, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function HealthOverviewPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Health Overview</h1>
          <p className="mt-1 text-muted-foreground">
            Workouts, nutrition, recovery, and wearable data
          </p>
        </div>
        <Link to="/dashboard/health/workout">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Log Workout
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Steps Today', value: '8,432', icon: Footprints, goal: '10,000' },
          { label: 'HRV', value: '52 ms', icon: Heart, status: 'Good' },
          { label: 'Sleep', value: '7h 20m', icon: Moon, status: 'Quality' },
          { label: 'Workouts This Week', value: '4', icon: Activity, goal: '5' },
        ].map((m) => (
          <Card key={m.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {m.label}
              </CardTitle>
              <m.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{m.value}</div>
              <p className="text-xs text-muted-foreground">
                {m.goal ? `Goal: ${m.goal}` : m.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Plan</CardTitle>
            <p className="text-sm text-muted-foreground">Your scheduled activities</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Morning Run</p>
                  <p className="text-sm text-muted-foreground">30 min • 9:00 AM</p>
                </div>
                <Button size="sm" className="ml-auto">Log</Button>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border p-4 opacity-60">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Strength Training</p>
                  <p className="text-sm text-muted-foreground">45 min • 6:00 PM</p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto">Upcoming</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Training Summary</CardTitle>
            <p className="text-sm text-muted-foreground">This week's progress</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Weekly goal</span>
                  <span className="font-medium">4 / 5 sessions</span>
                </div>
                <Progress value={80} className="mt-2" />
              </div>
              <Link to="/dashboard/health/training">
                <Button variant="outline" className="w-full">
                  View Training Plan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
