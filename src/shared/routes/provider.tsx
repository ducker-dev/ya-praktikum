import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { AnswersPage } from 'pages/answers'
import { HomePage } from 'pages/home'
import { JSGamePage } from 'pages/js-game'

import { ROUTES } from './routes'

export const RoutersProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.JS_GAME} element={<JSGamePage />} />
        <Route path={ROUTES.ANSWERS} element={<AnswersPage />} />
      </Routes>
    </Router>
  )
}
