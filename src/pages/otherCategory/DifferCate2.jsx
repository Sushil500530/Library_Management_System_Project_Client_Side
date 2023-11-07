import { Link } from "react-router-dom";
import gif from '../../assets/image/Animation - 1699268202700.gif'
import useOther2Axios from "../../hooks/useOther2Axios";

const DifferCate2 = () => {
    const { exData } = useOther2Axios()
    // console.log(exData);
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-8">Latest Type Book Of Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 pb-12">
                {
                    exData?.map(data => <div key={data._id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden dark:rounded-md rounded-md">
                        <div className="relative group h-[350px]">
                            <img src={data.image} className="w-full h-full  dark:border rounded-md "></img>
                            <div className="w-full absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <div className="flex flex-col items-center justify-center">
                                    <h2 className="text-white font-bold my-2 capitalize text-3xl">{data.name}</h2>
                                    <Link to={`/other-collection/${data.category}`}>
                                        <button className="btn text-2xl bg-purple-500 hover:text-purple-500 capitalize border-purple-500 text-white ">View More <img src={gif} className='w-12 h-10 text-white' alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DifferCate2;