import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from '../../Theme/Theme';
import { RouterProvider } from 'react-router-dom';
import  router from './router'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
