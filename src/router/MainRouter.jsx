
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
            // other collection
            {
                path: '/other-collection/:category',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/other-collection/${params.category}`)
            },
            // other id details 
            {
                path: '/book-details/:id',
                element: <PrivetRouter><SingleBookDetails></SingleBookDetails></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/other-collection/drama/${params.id}`)
            },
            // {
            //     path: "/updated-book/:id",
            //     element: <PrivetRouter><UpdatedBook></UpdatedBook></PrivetRouter>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/other-collection/drama/${params.id}`)
            // },
            {
                path: '/book-details/:id',
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

])

export default MainRouter;