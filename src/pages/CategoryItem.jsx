
// eslint-disable-next-line react/prop-types
const CategoryItem = ({ data }) => {
    const { _id, image, name, author_name, quantity, category, ratting, description } = data || {};
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="w-full h-[350px]">
                    <img src={image} alt="image" className="w-full h-[350px]" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 30)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;