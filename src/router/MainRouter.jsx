
import { createBrowserRouter } from 'react-router-dom';
import Resister from '../pages/Resister';
import Login from '../pages/Login';
import Header from '../components/header/Header';

const MainRouter = createBrowserRouter([
    {
        path:'/',
        element: <Header></Header>,
        children:[
            {
                path:'/',
               
            }
        ]
    },
    {
        path:'/resister',
        element:<Resister></Resister>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])

export default MainRouter;