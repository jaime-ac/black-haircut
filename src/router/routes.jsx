import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import Cortes from "../pages/Cortes";
import Trancas from "../pages/Trancas";
import Contato from "../pages/Contato";


const router = createBrowserRouter([

    {path: "/", element: <Home />},
    {path: "/cortes", element: <Cortes />},
    {path: "/trancas", element: <Trancas />},
    {path: "/contato", element: <Contato />}
    
]) 

export default router;