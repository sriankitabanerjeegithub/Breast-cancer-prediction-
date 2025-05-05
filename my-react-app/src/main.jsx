import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import "leaflet/dist/leaflet.css";
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(

<Auth0Provider
domain="dev-d1kk5i7ntw3cgcyx.us.auth0.com"
clientId="yaOp7yaqdHm3xbhjtc0Y7GsXPSxKaMSS"
authorizationParams={{
  redirect_uri: window.location.origin}}>

      <App/>
   
  
  </Auth0Provider>
)
