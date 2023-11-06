import Footer from "./Footer";

const AddBook = () => {

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const addBook = {
            name: form.name.value || "not to given",
            image: form.imageUrl.value || "not to given",
            author_name: form.athorName.value || "not to given",
            quantity: form.quantity.value || "not to given",
            category: form.category.value || "not to given",
            description: form.description.value || "not to given",
            ratting: form.ratting.value || "not to given",
        }
        console.log(addBook);
    }
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1100px] md:h-[760px] lg:h-[90vh] bg-fixed">
                <h3 className="text-center lg:text-white py-8 text-3xl font-bold">Give Your <span className='text-purple-500 font-bold'>Add Book</span> Information.... <span className="text-4xl font-bold text-purple-500">!</span></h3>
                <div className="pt-5">
                    <div className="lg:w-1/2 w-full mx-auto shadow-lg bg-blue-50">
                        <form onSubmit={handleAddBook} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 font-semibold text-base">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue='' name="name" placeholder="Book Name"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image Url</span>
                                    </label>
                                    <input type="url" name="imageUrl" className="input input-bordered" placeholder="given image URL" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" defaultValue='' placeholder="quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Athor Name</span>
                                    </label>
                                    <input type="text" name="athorName" defaultValue='' className="input input-bordered" placeholder="author name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue='' className="input input-bordered" placeholder="category" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue='' className="input input-bordered" placeholder="description" required />
                                </div>
                            </div>
                            <div className="form-control font-semibold text-base">
                                <label className="label">
                                    <span className="label-text">Ratting</span>
                                </label>
                                <input type="number" name="ratting" defaultValue='' className="input input-bordered" placeholder="ratting" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-purple-500 hover:text-black btn-block text-[18px] text-white capitalize" type="submit" value="Add Book" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddBook;