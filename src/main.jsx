import router from './router/routes'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { GlobalContextProvider } from './context/GlobalContext'
import './index.css'

createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>

    <RouterProvider router={router}>
    </RouterProvider>

  </GlobalContextProvider>
  
)
