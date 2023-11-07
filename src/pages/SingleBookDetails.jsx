import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SingleBookDetails = () => {
    const bookDetails = useLoaderData();
    const {user} = useAuth();
    const navigate = useNavigate();
    const [date,setDate] = useState('');
    const { image, name, author_name, category, description } = bookDetails || {};

    console.log(user);
    const userName = user?.displayName;
    const email = user?.email;
    const handleBorrow = () => {
        if(!date){
            return toast.error('date is not defined! Please defined the date...!')
         }
         const borrowDoc = {
            name,
            image,
            category,
            userName,
            email,
            date
         }
        console.log(borrowDoc);
        // fetch('http://localhost:5000/borrow-', {
        //     method:"POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body:JSON.stringify(borrowDoc)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.insertedId){
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Confirmation Successfully',
        //             text: 'Your order has been successfully.',
                   
        //           })
        //     }
        // })
        axios.post('http://localhost:5000/borrow-books', borrowDoc)
        .then((res) => {
            if(res.data.insertedId){
                Swal.fire({
                    title: "Borrow Successfully!",
                    text: "check you borrow books!",
                    icon: "success"
                  });
                //   console.log(res.data);
            }
     })
    }

    const handleReturn = () => {
        return navigate(-1)
    }

    return (
        <div className="container mx-auto dark:bg-zinc-800 dark:text-white py-5 lg:py-12">
            <div className="flex flex-col md:flex-col lg:flex-row justify-around mt-7">
                <div className="w-full lg:h-[480px] lg:w-[50%]">
                    <img className="h-[480px] w-full rounded" src={image} alt="meal-photo" />
                </div>
                <div className="lg:h-[450px] space-y-3 flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-violet-700">Book Name: {name}</h2>
                        <h1 className="text-xl font-semibold">Author Name: <span className="text-2xl text-gray-500">{author_name}</span></h1>
                        <h1 className="text-xl font-semibold">Category Name: <span className="text-2xl text-gray-500 capitalize">{category}</span></h1>
                    </div>
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
                    {/* use modal*/}
                    <dialog id="my_modal_5" className="modal modal-center sm:modal-middle dark:text-black">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg my-5">Book Return Date</h3>
                          <input type="date" onBlur={(e) => setDate(e.target.value)} name="date" className="input border border-black" id="" required />
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={handleBorrow} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full">Borrow</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <div className="flex lg:flex-row flex-col gap-5 mt-5">
                        <button onClick={handleReturn} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full ">Read More</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full ">Borrow Book</button>
                    </div>
                </div>
            </div>
            <div className="pt-12 space-y-3 p-5">
                <h1 className="text-2xl font-bold">About Library Management System</h1>
                <hr className="border-black w-[28%] my-3 dark:border-white" />
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