import { useLoaderData } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import Footer from "./Footer";

const Category = () => {
    const dataCategory = useLoaderData();
    // console.log(Object.keys(dataCategory).join(','));
    console.log(dataCategory);
    return (
        <div>
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
                <div className="lg:mt-12 mt-5">
                    <div className="pb-5">
                        {
                            dataCategory?.slice(1, 2).map(collection => <h1 key={collection._id} className="text-5xl text-start font-bold">About <span className="capitalize text-purple-500">{collection.category}</span> Books</h1>)

                        }
                        <hr className="border-black w-[28%] my-3 border dark:border-white" />
                    </div>

                    {
                        dataCategory?.slice(1, 2).map(collection => <p key={collection._id}>
                            The {collection.category} has an extensive range of types, among them being: historical, picaresque, sentimental, Gothic, psychological, novel of manners, epistolary, pastoral, roman à clef, antinovel, cult, detective, mystery, thriller, western, fantasy, and proletarian.
                            A novel is an extended work of narrative fiction usually written in prose and published as a book.[1] The English word to describe such a work derives from the Italian: novella for new, news, or short story (of something new), itself from the Latin: novella, a singular noun use of the neuter plural of novellus, diminutive of novus, meaning new.[2] According to Margaret Doody, the novel has a continuous and comprehensive history of about two thousand years, with its origins in the Ancient Greek and Roman novel, Medieval Chivalric romance, and in the tradition of the Italian Renaissance novella.[3] The ancient romance form was revived by Romanticism, in the historical romances of Walter Scott and the Gothic novel.[4]

                        </p>)

                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Category;