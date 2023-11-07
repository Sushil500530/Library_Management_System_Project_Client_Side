/* eslint-disable react/prop-types */

const BorrowBookRow = ({ borrowBook, handleReturnBook }) => {
    const { _id, name, image, category, userName, userEmail, date } = borrowBook || {};
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
                <td><button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold">Return Book</button></td>
            </tr>
            <dialog id="my_modal_5" className="modal modal-center sm:modal-middle dark:text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center my-5">Book Return Date</h3>
                    <div className="modal-action flex flex-col items-center justify-start">
                        <form onSubmit={() => handleReturnBook(_id)} className="space-y-5" method="dialog">
                            <input type="date" name="date" className="input border border-black w-full" id="" required />
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