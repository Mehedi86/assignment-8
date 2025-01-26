import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Mainlayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import GadgetDetails from "../pages/GadgetDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
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
                path: '/gadgets/:id',
                loader: () => fetch('../gadgets.json'),
                element:<GadgetDetails/>
            }
        ]
    }
])

export default router