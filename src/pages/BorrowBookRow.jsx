/* eslint-disable react/prop-types */

import { useState } from "react";

const BorrowBookRow = ({ borrowBook }) => {
    const { name, image, category, userName, userEmail, date } = borrowBook || {};
    const [returnDate,setReturnDate] = useState('');
    console.log(returnDate);

    return (
        <>
            <tr>
                <td>
                    <div className="avatar">
                        <div className="rounded dark:border w-24 h-24">
                            <img src={image} alt="book image" />
                        </div>
                    </div>
                </td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{userName}</td>
                <td>{userEmail}</td>
                <td>{date}</td>
                <td>{date.slice(0, 9) + 9}</td>
                <td><button onClick={() => document.getElementById('my_modal_5').showModal()}  className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold">Return Book</button></td>
            </tr>
            <dialog id="my_modal_5" className="modal modal-center sm:modal-middle dark:text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg my-5">Book Return Date</h3>
                    <input type="date" onBlur={(e) => setReturnDate(e.target.value)} name="date" className="input border border-black" id="" required />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold w-full">Return</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    );
};

export default BorrowBookRow;