import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import useAxios from "../hooks/useAxios";
import axios from "axios";
import Swal from "sweetalert2";


const UpdatedBook = () => {
    const { data: categories } = useAxios()
    const data = useLoaderData();
    const navigate = useNavigate();
    const { _id, image, name, author_name, quantity, ratting, description } = data || {};
    const handleUpdated = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updateBook = {
            name: form.name.value || "not to given",
            image: form.imageUrl.value || "not to given",
            author_name: form.athorName.value || "not to given",
            quantity: form.quantity.value || "not to given",
            category: form.category.value || "not to given",
            description: form.description.value || "not to given",
            ratting: form.ratting.value || "not to given",
        }
        console.log('updated book', updateBook);
        const responeData = await axios.put(`http://localhost:5000/category-collection/drama/${_id}`, updateBook)
        const data = await responeData.data;
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Updated Successfully!",
                text: "You clicked the button!",
                icon: "success"
            });
            return navigate('/all-books')
        }

    }
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1100px] md:h-[760px] lg:h-[90vh] bg-fixed">
                <h3 className="text-center lg:text-white py-8 text-3xl font-bold">Update Your <span className='text-purple-500 font-bold'>Book</span>.... <span className="text-4xl font-bold text-purple-500">!</span></h3>
                <div className="pt-5">
                    <div className="lg:w-1/2 w-full mx-auto shadow-lg bg-blue-50">
                        <form onSubmit={handleUpdated} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 font-semibold text-base">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue={name} name="name" placeholder="Book Name"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image Url</span>
                                    </label>
                                    <input type="url" name="imageUrl" defaultValue={image} className="input input-bordered" placeholder="given image URL" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Athor Name</span>
                                    </label>
                                    <input type="text" name="athorName" defaultValue={author_name} className="input input-bordered" placeholder="author name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select className="input input-bordered" name="category" id="">
                                        {categories?.map((category) => (
                                            <option className=""
                                                key={categories._id} defaultValue={category.category}>
                                                {category.category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-control font-semibold text-base">
                                    <label className="label">
                                        <span className="label-text">Ratting</span>
                                    </label>
                                    <input type="number" name="ratting" defaultValue={ratting} className="input input-bordered" placeholder="ratting" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Short Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full" type="text" name="description" defaultValue={description.slice(0, 80)} placeholder="description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-purple-500 border text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full" type="submit" value="Updated Book" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UpdatedBook;