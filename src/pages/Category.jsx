import { useLoaderData } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const dataCategory = useLoaderData();
    // console.log(Object.keys(dataCategory).join(','));
    console.log(dataCategory.length);
    return (
        <div className="container mx-auto dark:text-white py-12">
            {
                dataCategory?.slice(1, 2).map(collection => <h1 key={collection._id} className="text-5xl text-center font-bold pb-12">The Book of Categories is <span className="capitalize text-purple-500">{collection.category}</span></h1>)
            }
            {
                dataCategory.length === 0 && <div className="w-full h-[60vh] flex items-center justify-center">
                    <p className="text-4xl font-bold">No Items Found</p>
                    </div>
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