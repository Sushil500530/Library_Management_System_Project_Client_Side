
import { createBrowserRouter } from 'react-router-dom';
import Resister from '../pages/Resister';
import Login from '../pages/Login';
import BorrowBooks from '../pages/BorrowBooks';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Category from '../pages/Category';
import SingleBookDetails from '../pages/SingleBookDetails';
import AllBooks from '../pages/AllBooks';
import UpdatedBook from '../pages/UpdatedBook';
import ErrorPage from '../pages/ErrorPage';
import PrivetRouter from './PrivetRouter';
import LocalAdd from '../pages/LocalAdd';
import MainLayout from '../MainLayout';
import Category2 from '../pages/Category2';
import Dashboard from '../components/UserDashboard/Dashboard';
import MyBook from '../components/UserDashboard/MyBook';
import AddDashboardBook from '../components/UserDashboard/AddDashboardBook';
import UpdateDashboardBook from '../components/UserDashboard/UpdateDashboardBook';
import ManagBook from '../components/UserDashboard/ManagBook';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'add-book',
                element: <PrivetRouter><AddBook></AddBook></PrivetRouter>
            },
            {
                path: 'all-books',
                element: <PrivetRouter><AllBooks></AllBooks></PrivetRouter>
            },
            {
                path: 'borrow-books',
                element: <PrivetRouter><BorrowBooks></BorrowBooks></PrivetRouter>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/collection/:category',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/${params.category}`)
            },
            {
                path: '/book-details/:id',
                element: <PrivetRouter><SingleBookDetails></SingleBookDetails></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/drama/${params.id}`)
            },
            // other collection
            {
                path: '/other-collection/:category',
                element: <Category2></Category2>,
                loader: ({ params }) => fetch(`http://localhost:5000/other-collection/${params.category}`)
            },
            // other id details 
            {
                path: '/other-details/:id',
                element: <PrivetRouter><SingleBookDetails></SingleBookDetails></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/other-collection/drama/${params.id}`)
            },
            // {
            //     path: "/updated-book/:id",
            //     element: <PrivetRouter><UpdatedBook></UpdatedBook></PrivetRouter>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/other-collection/drama/${params.id}`)
            // },
            {
                path: '/category-details/:id',
                element: <PrivetRouter><SingleBookDetails></SingleBookDetails></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/drama/${params.id}`)
            },
            {
                path: "/updated-book/:id",
                element: <PrivetRouter><UpdatedBook></UpdatedBook></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/drama/${params.id}`)
            }
        ]
    },
    {
        path: '/resister',
        element: <Resister></Resister>
    },
    {
        path: '/add-category-book',
        element: <LocalAdd></LocalAdd>
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard",
                element:<div className='text-3xl font-bold text-center text-purple-500'>Dashboard</div>
            },
            {
                path:"/dashboard/my-book",
                element:<MyBook></MyBook>
            },
            {
                path:"/dashboard/add-book",
                element:<AddDashboardBook></AddDashboardBook>
            },
            {
                path:"/dashboard/update-book",
                element:<UpdateDashboardBook></UpdateDashboardBook>
            },
            {
                path:"/dashboard/manage-book",
                element:<ManagBook></ManagBook>
            },
           
        ]
    }

])

export default MainRouter;