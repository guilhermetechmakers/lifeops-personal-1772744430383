import { Outlet } from 'react-router-dom'
import { DashboardSidebar, GlobalSearchTrigger } from '@/components/layout/dashboard-sidebar'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <GlobalSearchTrigger />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard/notifications" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
            <Link to="/dashboard/profile">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary font-semibold">
                U
              </div>
            </Link>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
