import React from 'react'
import ReactDOM from 'react-dom/client'

import Routes from './routes/routes'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>
)
