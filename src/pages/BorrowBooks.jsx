import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BorrowBookRow from "./BorrowBookRow";

const BorrowBooks = () => {
    const secureAxios = useAxiosSecure();
    const {user} = useAuth();
    const [borrowing,setBorrowing] = useState([]);
    const url = `/borrow-books?email=${user?.email}`;
    // const url = `/borrows?email=${user?.email}`;
    useEffect(() => {
        secureAxios?.get(url)
        .then(res => setBorrowing(res?.data))
    },[secureAxios,url])
    console.log(borrowing);


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
                                borrowBook={borrow}
                                ></BorrowBookRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BorrowBooks;