import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import Rating from "react-rating";

// eslint-disable-next-line react/prop-types
const CategoryItem = ({ data }) => {
    const { _id, image, name, author_name, quantity, category, description } = data || {};
    return (
        <div className="card card-compact bg-base-100 dark:bg-zinc-900 shadow-xl p-5 m-5 lg:p-5 lg:m-0 border">
            <div className="w-full h-[250px] lg:h-[350px] rounded-md">
                <img src={image} alt="image" className="w-full h-[250px] lg:h-[350px] rounded-md" />
            </div>
            <div className="card-body">
                <Rating
                    placeholderRating={4}
                    readonly
                    placeholderSymbol={<AiFillStar className="text-amber-400 w-7 h-7 icon"></AiFillStar>}
                    fullSymbol={<AiFillStar className="text-amber-400 w-7 h-7 icon"></AiFillStar>}
                />
                <h2 className="card-title">{name}</h2>
                <h1 className="text-base font-semibold">Author Name: {author_name}</h1>
                <p className="text-base font-semibold capitalize">Category: {category}</p>
                <p className="text-base font-semibold">Quantity: {quantity}</p>
                <p>{description.slice(0, 90)}</p>
                <Link to={`/book-details/${_id}`}>
                    <div className="card-actions">
                        <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full">Show Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryItem;