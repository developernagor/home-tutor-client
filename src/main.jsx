import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
   <App />
   </BrowserRouter>
  </QueryClientProvider>
  </AuthProvider>
  </StrictMode>,
)
