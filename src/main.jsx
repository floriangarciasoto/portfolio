import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PortfolioContextProvider from './context/usePortfolioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PortfolioContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PortfolioContextProvider>
)
