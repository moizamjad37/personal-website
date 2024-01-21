import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import './navigationBar/navbarStyles.css'
import './profile/profileStyles.css'
import './about/aboutStyles.css'
import './experience/experienceStyles.css'
import './projects/projectStyles.css'
import './contact/contactStyles.css'
import './footer/footerStyles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
