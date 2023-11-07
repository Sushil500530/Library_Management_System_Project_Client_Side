import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllBook = ({books}) => {
    const {_id,image,name,author_name,quantity,category} = books || {};
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 dark:bg-zinc-800 shadow-xl p-5 m-5 lg:p-5 lg:m-0 border">
                <div className="w-full h-[250px] lg:h-[320px] rounded-md">
                    <img src={image} alt="image" className="w-full h-full rounded-md" />
                </div>
                <div className="card-body">
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <h1 className="text-base font-semibold">Author Name: {author_name}</h1>
                    <p className="text-base font-semibold capitalize">Category: {category}</p>
                    <p className="text-base font-semibold">Quantity: {quantity}</p>
                    <Link to={`/updated-book/${_id}`}>
                        <div className="card-actions mt-3">
                            <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full">Update Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllBook;