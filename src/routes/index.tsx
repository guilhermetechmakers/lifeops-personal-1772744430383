import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { PasswordResetPage } from '@/pages/password-reset'
import { OnboardingPage } from '@/pages/onboarding'
import { HelpPage } from '@/pages/help'
import { NotFoundPage } from '@/pages/not-found'
import { DashboardOverview } from '@/pages/dashboard/dashboard-overview'
import { ProjectsListPage } from '@/pages/dashboard/projects-list'
import { ContentLibraryPage } from '@/pages/dashboard/content-library'
import { FinanceOverviewPage } from '@/pages/dashboard/finance-overview'
import { HealthOverviewPage } from '@/pages/dashboard/health-overview'
import { NotificationsCenterPage } from '@/pages/dashboard/notifications-center'
import { SettingsPage } from '@/pages/dashboard/settings'
import { ProfilePage } from '@/pages/dashboard/profile'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/password-reset', element: <PasswordResetPage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
  { path: '/help', element: <HelpPage /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'projects', element: <ProjectsListPage /> },
      { path: 'projects/new', element: <ProjectsListPage /> },
      { path: 'projects/:id', element: <ProjectsListPage /> },
      { path: 'content', element: <ContentLibraryPage /> },
      { path: 'content/new', element: <ContentLibraryPage /> },
      { path: 'content/:id', element: <ContentLibraryPage /> },
      { path: 'finance', element: <FinanceOverviewPage /> },
      { path: 'finance/accounts', element: <FinanceOverviewPage /> },
      { path: 'finance/transactions', element: <FinanceOverviewPage /> },
      { path: 'finance/budget', element: <FinanceOverviewPage /> },
      { path: 'health', element: <HealthOverviewPage /> },
      { path: 'health/workout', element: <HealthOverviewPage /> },
      { path: 'health/training', element: <HealthOverviewPage /> },
      { path: 'notifications', element: <NotificationsCenterPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  { path: '/privacy', element: <LegalPlaceholder title="Privacy Policy" /> },
  { path: '/terms', element: <LegalPlaceholder title="Terms of Service" /> },
  { path: '*', element: <NotFoundPage /> },
])

function LegalPlaceholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          This page will contain the full {title.toLowerCase()} text. Contact privacy@lifeops.com for privacy inquiries.
        </p>
      </div>
    </div>
  )
}
