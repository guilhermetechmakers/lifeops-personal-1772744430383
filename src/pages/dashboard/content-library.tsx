import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, FileText, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const mockContent = [
  { id: '1', title: 'Q2 Blog Strategy', status: 'draft', channel: 'Blog', updated: '2h ago' },
  { id: '2', title: 'LinkedIn Post - Product Launch', status: 'scheduled', channel: 'LinkedIn', updated: '1d ago' },
  { id: '3', title: 'Twitter Thread - Tips', status: 'published', channel: 'X', updated: '3d ago' },
]

export function ContentLibraryPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Content Library</h1>
          <p className="mt-1 text-muted-foreground">
            Manage drafts, scheduled, and published content
          </p>
        </div>
        <Link to="/dashboard/content/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Content
          </Button>
        </Link>
      </div>

      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockContent.map((c) => (
          <Link key={c.id} to={`/dashboard/content/${c.id}`}>
            <Card className="transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground line-clamp-1">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.channel}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge
                        variant={
                          c.status === 'published'
                            ? 'success'
                            : c.status === 'scheduled'
                            ? 'warning'
                            : 'secondary'
                        }
                      >
                        {c.status}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {c.updated}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
