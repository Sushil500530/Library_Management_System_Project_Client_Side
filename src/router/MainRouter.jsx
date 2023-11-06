
import { createBrowserRouter } from 'react-router-dom';
import Resister from '../pages/Resister';
import Login from '../pages/Login';
import Header from '../components/header/Header';
import BorrowBooks from '../pages/BorrowBooks';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Category from '../pages/Category';
import SingleBookDetails from '../pages/SingleBookDetails';
import AllBooks from '../pages/AllBooks';
import UpdatedBook from '../pages/UpdatedBook';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'add-book',
                element: <AddBook></AddBook>
            },
            {
                path: 'all-books',
                element: <AllBooks></AllBooks>
            },
            {
                path: 'borrow-books',
                element: <BorrowBooks></BorrowBooks>
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
                element: <SingleBookDetails></SingleBookDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/drama/${params.id}`)
            },
            {
                path: "/updated-book/:id",
                element: <UpdatedBook></UpdatedBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/category-collection/drama/${params.id}`)
            }
        ]
    },
    {
        path: '/resister',
        element: <Resister></Resister>
    },

])

export default MainRouter;