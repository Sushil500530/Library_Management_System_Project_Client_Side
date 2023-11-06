import { useLoaderData, useNavigate } from "react-router-dom";

const SingleBookDetails = () => {
    const bookDetails = useLoaderData()
    const navigate = useNavigate()
    const { _id, image, name, author_name, quantity, category, ratting, description } = bookDetails || {};


    const handleReturn = () => {
        return navigate(-1)
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-col lg:flex-row justify-around mt-7">
                <div className="w-full lg:h-[480px] lg:w-[50%]">
                    <img className="h-[480px] w-full rounded" src={image} alt="meal-photo" />
                </div>
                <div className="lg:h-[450px] space-y-3 flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-violet-700">Book Name: {name}</h2>
                        <h1 className="text-xl font-semibold">Author Name: <span className="text-2xl text-gray-500">{author_name}</span></h1>
                        <h1 className="text-xl font-semibold">Category Name: <span className="text-2xl text-gray-500">{category}</span></h1>
                    </div>
                    {/* */}
                    <p className="first-letter:text-7xl first-letter:text-purple-500 first-letter:font-bold">{description}</p>
                    <div>
                        <div className="flex gap-5">
                            <h3 className="text-xl font-semibold">Review :</h3>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col gap-5 mt-5">
                        <button onClick={handleReturn} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full ">Read More</button>
                        <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full ">Borrow Book</button>
                    </div>
                </div>
            </div>
            <div className="pt-12 space-y-3">
                <h1 className="text-2xl font-bold">About Library Management System</h1>
                <hr className="border-black w-[28%] my-3" />
                <p>
                    A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.

                    This system completely automates all your library’s activities. The best way to maintain, organize, and handle countless books systematically is to implement a library management system software.

                    A library management system is used to maintain library records. It tracks the records of the number of books in the library, how many books are issued, or how many books have been returned or renewed or late fine charges, etc.

                    You can find books in an instant, issue/reissue books quickly, and manage all the data efficiently and orderly using this system. The purpose of a library management system is to provide instant and accurate data regarding any type of book, thereby saving a lot of time and effort.
                </p>
            </div>
        </div>
    );
};

export default SingleBookDetails;