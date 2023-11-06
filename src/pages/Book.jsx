
import BookCategory from "./BookCategory";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Book = () => {
    const {data} = useAxios()
    const navigate = useNavigate();
    console.log(navigate == 'loading');

    // console.log(data);
    return (
        <div className="container mx-auto">
            <h3 className="text-5xl font-bold text-center py-5">Our Book Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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