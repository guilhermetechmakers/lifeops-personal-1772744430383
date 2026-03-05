import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const mockProjects = [
  { id: '1', name: 'Q1 Product Launch', status: 'active', tasks: 12, progress: 65 },
  { id: '2', name: 'Content Calendar Q2', status: 'active', tasks: 8, progress: 40 },
  { id: '3', name: 'Website Redesign', status: 'planning', tasks: 24, progress: 10 },
  { id: '4', name: 'Marketing Campaign', status: 'completed', tasks: 15, progress: 100 },
]

export function ProjectsListPage() {
  const [search, setSearch] = useState('')
  const [isLoading] = useState(false)

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Manage projects with AI-assisted planning and Kanban
          </p>
        </div>
        <Link to="/dashboard/projects/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((p) => (
            <Link key={p.id} to={`/dashboard/projects/${p.id}`}>
              <Card className="transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold line-clamp-1">
                    {p.name}
                  </CardTitle>
                  <Button variant="ghost" size="icon-sm" onClick={(e) => e.preventDefault()}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        p.status === 'completed'
                          ? 'success'
                          : p.status === 'planning'
                          ? 'warning'
                          : 'default'
                      }
                    >
                      {p.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {p.tasks} tasks
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.progress}% complete</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {!isLoading && mockProjects.length === 0 && (
        <Card className="flex flex-col items-center justify-center py-16">
          <CardContent className="text-center">
            <p className="text-muted-foreground">No projects yet</p>
            <Link to="/dashboard/projects/new" className="mt-4 inline-block">
              <Button>Create your first project</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
