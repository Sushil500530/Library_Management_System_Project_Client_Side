import useCategory from "../hooks/useCategory";
import AllBook from "./AllBook";

const AllBooks = () => {
    const { data: categories } = useCategory();
    console.log(categories);
    return (
        <div className="bg-blue-50">
            <div className="w-full container mx-auto pb-12">
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