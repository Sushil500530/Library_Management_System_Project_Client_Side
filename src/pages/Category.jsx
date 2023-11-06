import { useLoaderData } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const dataCategory = useLoaderData();
    // console.log(Object.keys(dataCategory).join(','));
    return (
        <div className="container mx-auto">
            {
                dataCategory.slice(1, 2).map(collection => <h1 key={collection._id} className="text-5xl text-center font-bold capitalize py-8">
                    {collection.category}
                </h1>)
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    dataCategory?.map((data, idx) => <CategoryItem
                        key={idx}
                        data={data}
                    ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;