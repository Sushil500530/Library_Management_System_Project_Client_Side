
import { createBrowserRouter } from 'react-router-dom';
import Resister from '../pages/Resister';
import Login from '../pages/Login';
import Header from '../components/header/Header';
import BorrowBooks from '../pages/BorrowBooks';
import Home from '../pages/Home';

const MainRouter = createBrowserRouter([
    {
        path:'/',
        element: <Header></Header>,
        children:[
            {
                path:'/',
               element:<Home></Home>
            },
            {
                path:'/add-book',
               element:<BorrowBooks></BorrowBooks>
            },
            {
                path:'/all-books',
               element:<BorrowBooks></BorrowBooks>
            },
            {
                path:'/borrow-books',
               element:<BorrowBooks></BorrowBooks>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'/resister',
        element:<Resister></Resister>
    },
  
])

export default MainRouter;