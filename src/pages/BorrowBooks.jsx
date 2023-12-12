import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BorrowBookRow from "./BorrowBookRow";
import Swal from "sweetalert2";


const BorrowBooks = () => {
    const secureAxios = useAxiosSecure();
    const { user } = useAuth();
    const [borrowing, setBorrowing] = useState([]);
    const url = `/borrow-books?email=${user?.email}`;
    useEffect(() => {
        secureAxios?.get(url)
            .then(res => setBorrowing(res?.data))
    }, [secureAxios, url])
    // console.log(borrowing);
    const handleReturnBook = (_id,) => {
        Swal.fire({
            title: 'Are you sure Book Return?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/borrow-books/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Returned!',
                                'Your file has been Returned.',
                                'success'
                            )
                            const remaining = borrowing.filter(borrow => borrow._id !== _id)
                            setBorrowing(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="container mx-auto pt-5 lg:pt-12 dark:text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-[18px] font-bold dark:text-white">
                            <tr>
                                <th>Photo</th>
                                <th>Book Name</th>
                                <th>Category Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Borrow Date</th>
                                <td>Return Date</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="font-semibold">

                            {
                                borrowing?.map(borrow => <BorrowBookRow
                                    key={borrow._id}
                                    handleReturnBook={handleReturnBook}
                                    borrowBook={borrow}
                                ></BorrowBookRow>)
                            }
                        </tbody>
                    </table>
                    {
                        borrowing?.length === 0 && <div className="w-full h-[40vh] flex items-center justify-center">
                            <p className="text-4xl font-bold text-black dark:text-white">No Borrow Books Found</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BorrowBooks;