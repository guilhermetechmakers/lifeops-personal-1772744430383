import { Bell, Check, Clock, Undo2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mockNotifications = [
  { id: '1', type: 'ai', title: 'AI suggested calendar event', desc: 'Based on project milestone', time: '2h ago', unread: true },
  { id: '2', type: 'finance', title: 'Unusual transaction flagged', desc: '$450 at Electronics Store', time: '5h ago', unread: true },
  { id: '3', type: 'health', title: 'Workout reminder', desc: 'Morning run scheduled for 9:00 AM', time: '1d ago', unread: false },
]

export function NotificationsCenterPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        <p className="mt-1 text-muted-foreground">
          AI actions, schedules, finance anomalies, and health alerts
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="default" size="sm">All</Button>
        <Button variant="outline" size="sm">Unread</Button>
        <Button variant="outline" size="sm">AI</Button>
        <Button variant="outline" size="sm">Finance</Button>
        <Button variant="outline" size="sm">Health</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockNotifications.map((n) => (
              <div
                key={n.id}
                className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                  n.unread ? 'border-primary/30 bg-primary/5' : 'border-border'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{n.title}</p>
                    {n.unread && <Badge variant="default" className="text-[10px]">New</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{n.desc}</p>
                  <p className="text-xs text-muted-foreground mt-2">{n.time}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="ghost" size="icon-sm" title="Mark read">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon-sm" title="Snooze">
                    <Clock className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon-sm" title="Undo">
                    <Undo2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
