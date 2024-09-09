import { createBrowserRouter } from 'react-router-dom'
import CardDetail from '~/pages/CardDetail'
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
        element: <CardListPage />,
        children: [
          {
            path: '/picture/:pictureId',
            element: <CardDetail />
          }
        ]
      },
      {
        path: '/game',
        element: <GamePage />
      }
    ]
  }
])
