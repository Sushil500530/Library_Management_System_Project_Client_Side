import gif from '../assets/image/Animation - 1699268202700.gif'
import BookCategory from "./BookCategory";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const Book = () => {
    const { data } = useAxios()
    // console.log(data);
    return (
        <div className="container mx-auto py-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-center py-5">Our Book Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 m-5">
                {
                    data?.map(category => <BookCategory
                        key={category._id}
                        bookCategory={category}
                    ></BookCategory>
                    )
                }
                <div>
                    <div className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden dark:rounded-md rounded-md">
                        <div className="relative group h-[350px]">
                            <img src='https://i.ibb.co/NmqtTQr/add-plus-icon-28.png' className="w-full h-full  dark:border rounded-md "></img>
                            <div className="w-full absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <div className="flex flex-col items-center justify-center">
                                    <Link to={`add-category-book`}>
                                        <button className="btn text-2xl bg-purple-500 hover:text-purple-500 capitalize border-purple-500 text-white ">View More <img src={gif} className='w-12 h-10 text-white' alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;