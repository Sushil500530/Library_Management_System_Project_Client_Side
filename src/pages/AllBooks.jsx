import { RotatingLines } from "react-loader-spinner";
import useCategory from "../hooks/useCategory";
import AllBook from "./AllBook";

const AllBooks = () => {
    const { data: categories, isLoading } = useCategory();
    if (isLoading == true) {
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></p>
    }
    return (
        <div className="dark:bg-zinc-900 dark:text-white">
            <div className="w-full container mx-auto pb-12">
                <h1 className="text-2xl font-bold text-center">Book items : {categories.length} </h1>
                <div className="flex items-center justify-end py-5 px-2">
                    <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold">Borrowing Books</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        categories?.map(category => <AllBook
                            key={category._id}
                            books={category}
                        ></AllBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;