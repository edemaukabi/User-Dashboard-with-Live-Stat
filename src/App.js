import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className='bg-catskillWhite'>
      <Dashboard />
    </div>
    </Router>
  )
}

export default App