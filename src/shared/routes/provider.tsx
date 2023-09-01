import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { HomePage } from 'pages/home'
import { JSGamePage } from 'pages/js-game'

import { ROUTES } from './routes'

export const RoutersProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.JS_GAME} element={<JSGamePage />} />
      </Routes>
    </Router>
  )
}
