import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Usercontext from './components/Usercontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Usercontext>
        <App />
      </Usercontext>
    </React.StrictMode>
  </BrowserRouter>
)
