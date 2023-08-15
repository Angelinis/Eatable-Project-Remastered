import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Global } from '@emotion/react'
import { reset, global } from './Styles/global.js'

import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset}></Global>
    <Global styles={global}></Global>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
