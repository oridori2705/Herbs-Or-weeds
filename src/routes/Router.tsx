import { createBrowserRouter } from 'react-router-dom'

import HomePage from '~/pages/MainPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])
