import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from "axios";
import {SHOP_SETTINGS} from "./utilities/Config";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
document.title = SHOP_SETTINGS.SHOP_NAME
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
