// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import PortfolioContextProvider from './context/usePortfolioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PortfolioContextProvider>
    <App />
  </PortfolioContextProvider>
  // </React.StrictMode>
)
