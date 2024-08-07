import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <GoogleOAuthProvider clientId="189655443003-009g0e3ba2dnctm8iu14n89fc824hekp.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>;
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
