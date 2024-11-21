import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
<<<<<<< HEAD
import AuthProvider from './context/AuthProvider.jsx'
=======
>>>>>>> 022b478319ad9cc2314617aaf8566117d8a8d790
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <AuthProvider>
=======
>>>>>>> 022b478319ad9cc2314617aaf8566117d8a8d790
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} >
        </RouterProvider>
      </QueryClientProvider>
<<<<<<< HEAD
    </AuthProvider>
=======
>>>>>>> 022b478319ad9cc2314617aaf8566117d8a8d790
  </StrictMode>,
)
