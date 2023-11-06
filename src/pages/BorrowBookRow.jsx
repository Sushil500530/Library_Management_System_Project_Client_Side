/* eslint-disable react/prop-types */

const BorrowBookRow = ({ borrowBook }) => {
    const {name, image, category, userName, userEmail, date } = borrowBook || {}
    return (
        <tr>
            <td>
                <div className="avatar">
                <div className="rounded w-24 h-24">
                    <img src={image} alt="book image" />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{date}</td>
            <td>{date.slice(0,9)+9}</td>
            <td><button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-purple-700 font-semibold">Return Book</button></td>
        </tr>
    );
};

export default BorrowBookRow;