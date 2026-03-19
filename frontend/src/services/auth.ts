import axios from 'axios'

const TOKEN_KEY = 'demo_token'
const USERNAME_KEY = 'demo_username'

export type LoginRequest = {
  username: string
  password: string
}

type LoginResponse = {
  token: string
  username: string
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
})

export async function login(params: LoginRequest) {
  const { data } = await api.post<LoginResponse>('/auth/login', params)
  localStorage.setItem(TOKEN_KEY, data.token)
  localStorage.setItem(USERNAME_KEY, data.username)
  return data
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USERNAME_KEY)
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem(TOKEN_KEY))
}

export function getCurrentUsername() {
  return localStorage.getItem(USERNAME_KEY) ?? '用户'
}
