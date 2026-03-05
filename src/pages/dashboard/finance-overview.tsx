import { Link } from 'react-router-dom'
import { TrendingUp, AlertTriangle, CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

const mockCashflow = [
  { month: 'Jan', balance: 4200 },
  { month: 'Feb', balance: 3800 },
  { month: 'Mar', balance: 4500 },
  { month: 'Apr', balance: 4100 },
  { month: 'May', balance: 4800 },
  { month: 'Jun', balance: 5200 },
]

const mockAnomalies = [
  { desc: 'Unusual $450 charge at Electronics Store', date: '2 days ago' },
]

export function FinanceOverviewPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Finance Overview</h1>
          <p className="mt-1 text-muted-foreground">
            Balances, forecasts, anomalies, and budget health
          </p>
        </div>
        <Link to="/dashboard/finance/accounts">
          <Button variant="outline" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Link Account
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,234.00</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4" />
              +12% vs last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Budget Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">On track</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming Bills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Anomalies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-amber-600">Needs review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Cashflow Forecast</CardTitle>
            <p className="text-sm text-muted-foreground">6-month trend</p>
          </CardHeader>
          <CardContent>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockCashflow}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgb(255, 212, 0)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="rgb(255, 212, 0)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgb(230, 232, 236)" />
                  <XAxis dataKey="month" stroke="rgb(91, 95, 104)" fontSize={12} />
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
                    dataKey="balance"
                    stroke="rgb(255, 212, 0)"
                    strokeWidth={2}
                    fill="url(#colorBalance)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Anomaly Alerts
            </CardTitle>
            <Link to="/dashboard/finance/transactions">
              <Button variant="ghost" size="sm">View all</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAnomalies.map((a, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-800 dark:bg-amber-900/20"
                >
                  <p className="text-sm font-medium text-foreground">{a.desc}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.date}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
