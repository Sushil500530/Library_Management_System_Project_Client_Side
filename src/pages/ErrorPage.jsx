import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center w-full ">
            <div className="w-full h-[70vh] relative">
                <img src="https://i.ibb.co/NLX3LH6/f8bbfbcbf5b7aa83b57eab028a2ee310.gif" className="w-full h-full" alt="" />
                <Link to="/" className="absolute bottom-0 left-1/2">
                <button className="btn hover:text-white hover:bg-purple-500 border border-purple-500">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;