import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="text-base-content w-full lg:h-[50vh] h-[650px] flex flex-col items-start justify-center py-8 bg-slate-500">
            <footer className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between container mx-auto">
                <div className="lg:w-[300px] lg:m-0 mx-auto flex space-y-5 flex-col items-center justify-center pt-10">
                    <img className="w-full h-[100px] rounded-md" src="https://i.pinimg.com/564x/f1/03/2a/f1032ab7db04b3f56b43e81c9b21ec7a.jpg" alt="image" />
                    <div className="flex gap-4 items-center justify-center">
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaFacebook className="text-5xl"></FaFacebook></a>
                        <a href="#" className="w-9 h-9 hover:text-red-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaYoutube className="text-5xl"></FaYoutube></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaGoogle className="text-5xl"></FaGoogle></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaTwitter className="text-5xl"></FaTwitter></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer rounded-full flex items-center justify-center"><FaLinkedin className="text-5xl"></FaLinkedin></a>

                    </div>
                </div>
                <nav className=" lg:ml-8 flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Books</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Novel</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Drama</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Thriller</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">History</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Company</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">About us</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Contact</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Jobs</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Press kit</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Legal</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Terms of use</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Privacy policy</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer hover:underline">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;