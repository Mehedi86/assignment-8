import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Mainlayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import GadgetDetails from "../pages/GadgetDetails";
import About from "../pages/About";
import Errorpage from "../components/Errorpage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/about',
                element: <About/>

            },
            {
                path: '/gadgets/:id',
                loader: () => fetch('../gadgets.json'),
                element:<GadgetDetails/>
            }
        ]
    }
])

export default router