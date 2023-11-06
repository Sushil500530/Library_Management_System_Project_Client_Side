
import BookCategory from "./BookCategory";
import useAxios from "../hooks/useAxios";

const Book = () => {
    const {data} = useAxios()
    // console.log(data);
    return (
        <div className="container mx-auto py-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-center py-5">Our Book Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7">
                {
                data?.map(category => <BookCategory
                key={category._id}
                bookCategory={category}
                ></BookCategory>
                )
            }
            </div>
        </div>
    );
};

export default Book;