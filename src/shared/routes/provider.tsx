import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ROUTES } from './routes'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <div>HOME</div>,
  },
  {
    path: ROUTES.JS_GAME,
    element: <div>JS_GAME</div>,
  },
])

export const RoutersProvider = () => {
  return <RouterProvider router={router} />
}
