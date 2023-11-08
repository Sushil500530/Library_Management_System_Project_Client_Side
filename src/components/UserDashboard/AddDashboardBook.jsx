
const AddDashboardBook = () => {
    const handleAddedBook = (e) => {
        e.preventDefault();
    }
    return (
        <div className="dark:text-white">
            <h3 className="text-center dark:text-white py-8 text-3xl font-bold"><span className='text-purple-500 font-bold'>Add Book</span> Your.... <span className="text-4xl font-bold text-purple-500">!</span></h3>
            <div className="pt-5">
                <div className="lg:w-1/2 w-full mx-auto shadow-lg dark:bg-zinc-800 bg-blue-50 dark:text-white dark:border">
                    <form onSubmit={handleAddedBook} className="card-body dark:text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 font-semibold text-base">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text dark:text-white">Name</span>
                                </label>
                                <input type="text" defaultValue='' name="name" placeholder="Book Name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">image Url</span>
                                </label>
                                <input type="url" name="imageUrl" className="input input-bordered" placeholder="given image URL" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Quantity</span>
                                </label>
                                <input type="number" name="quantity" defaultValue='' placeholder="quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Athor Name</span>
                                </label>
                                <input type="text" name="athorName" defaultValue='' className="input input-bordered" placeholder="author name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue='' className="input input-bordered" placeholder="category" required />
                            </div>
                            <div className="form-control font-semibold text-base">
                                <label className="label">
                                    <span className="label-text dark:text-white">Ratting</span>
                                </label>
                                <input type="number" name="ratting" defaultValue='' className="input input-bordered" placeholder="ratting" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label"> 
                                <span className="label-text font-semibold dark:text-white">Short Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" type="text" name="description" placeholder="description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-purple-500 border text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full" type="submit" value="Add Book" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDashboardBook;