import { createBrowserRouter } from 'react-router-dom'
import CardListPage from '~/pages/CardListPage'
import GamePage from '~/pages/GamePage'
import MainPage from '~/pages/MainPage'
import RootLayout from '~/pages/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/picture',
        element: <CardListPage />
      },
      {
        path: '/game',
        element: <GamePage />
      }
    ]
  }
])
