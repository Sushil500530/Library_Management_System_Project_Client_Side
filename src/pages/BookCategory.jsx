/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BookCategory = ({ bookCategory }) => {
    const { thumbnail, category } = bookCategory || {};
    return (
        <div>
            <div className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden dark:rounded-md rounded-md">
                <div className="relative group h-[350px]">
                    <img src={thumbnail} className="w-full h-full  dark:border rounded-md "></img>
                    <div className="w-full absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-white font-bold my-2 capitalize text-3xl">{category}</h2>
                            <Link to={`/collection/${category}`}>
                                <button className="btn text-2xl bg-purple-500 hover:text-purple-500 capitalize border-purple-500 text-white ">View More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;