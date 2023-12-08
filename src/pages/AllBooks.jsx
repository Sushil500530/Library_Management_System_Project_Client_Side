import { RotatingLines } from "react-loader-spinner";
// import useCategory from "../hooks/useCategory";
import AllBook from "./AllBook";
import { useState } from "react";
import Footer from "./Footer";
import useSortAxios from "../hooks/useSortAxios";

const AllBooks = () => {
    const [asc, setAcs] = useState(true);
    const categories = useSortAxios(asc)
    // const { data: categories, isLoading,isError } = useCategory(asc);

console.log(asc);
    if (categories.length === 0) {
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></p>
    }
    // if(isError){
    //     return <p className="flex items-center justify-center w-full h-[50vh] text-2xl font-semibold dark:text-white">Something is Went Wrong.....<span className="text-red-600">!</span></p>
    // }
    return (
       <div>
         <div className="dark:bg-zinc-900 dark:text-white">
            <div className="w-full container mx-auto pb-12">
                <div className="flex items-center justify-between py-5 px-2">
                    <h1 className="text-2xl font-bold">All Book Here.....</h1>
             
                 <button onClick={() => setAcs(!asc)} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold">
                    {asc ? 'Avaiable Borrowing Books' : 'Low Borrowing Books'}
                 </button>
           
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