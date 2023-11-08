import { RotatingLines } from "react-loader-spinner";
import useCategory from "../hooks/useCategory";
import AllBook from "./AllBook";
import useSortAxios from "../hooks/useSortAxios";
import { useState } from "react";
import Footer from "./Footer";

const AllBooks = () => {
    const { data: categories, isLoading,isError } = useCategory();
    const [sort, setSort] = useState(categories);
    const {data} = useSortAxios();


    const handleSorted =async(e) => {
        e.preventDefault();
        // console.log(sort);
        const name = e.target.name.value;
        console.log(name);
    }
    if (isLoading == true) {
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></p>
    }
    if(isError){
        return <p className="flex items-center justify-center w-full h-[50vh] text-2xl font-semibold dark:text-white">Something is Went Wrong.....<span className="text-red-600">!</span></p>
    }
    return (
       <div>
         <div className="dark:bg-zinc-900 dark:text-white">
            <div className="w-full container mx-auto pb-12">
                <div className="flex items-center justify-between py-5 px-2">
                    <h1 className="text-2xl font-bold">All Book Here.....</h1>
                 <form onSubmit={handleSorted}>
                 <input name="desc" type="submit" value="Borrowing Books" className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold" />
                 </form>
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
        <Footer></Footer>
       </div>
    );
};

export default AllBooks;