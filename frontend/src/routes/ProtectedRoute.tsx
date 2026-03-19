import type { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../services/auth'

function ProtectedRoute({ children }: PropsWithChildren) {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
