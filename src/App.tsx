import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from '@/routes'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgb(var(--card))',
            border: '1px solid rgb(var(--border))',
            borderRadius: '12px',
          },
        }}
      />
    </>
  )
}
