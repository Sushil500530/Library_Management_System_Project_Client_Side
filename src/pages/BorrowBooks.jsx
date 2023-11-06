import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BorrowBooks = () => {
    const secureAxios = useAxiosSecure();
    const {user} = useAuth();
    const [borrowing,setBorrowing] = useState([]);
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
                                <td><button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold dark:hover:text-white">Return Book</button></td>
                            </tr>
                        </thead>
                     
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BorrowBooks;