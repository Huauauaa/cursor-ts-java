import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './routes/ProtectedRoute'
import { isAuthenticated } from './services/auth'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <Navigate
            to={isAuthenticated() ? '/home' : '/login'}
            replace
          />
        }
      />
    </Routes>
  )
}

export default App
