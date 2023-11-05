import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import sidePhoto from '../assets/image/animation_lokavq09_large.gif'



const Resister = () => {
    const [showPassword,setShowPassword] = useState('')
    return (
        <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1400px] lg:h-screen">
            <div className=" w-full h-screen text-white py-12">
            <h3 className="text-2xl font-semibold pt-8 text-center pb-12 lg:pb-0">Please Resister Now</h3>
                <div className='container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-0 md:flex-col lg:flex-row'>
                    <div className="w-full h-[550px] lg:w-1/2 p-5">
                        <img src={sidePhoto} className="w-full h-full rounded-md" alt="" />
                    </div>
                    <div className=" w-full lg:w-1/3 mx-auto mt-12 pb-5 border-2 border-purple-500 rounded-md">
                        <form className="space-y-8 p-5 text-white">
                            <label className="text-xl font-bold my-5">Name
                                <input type="text" name="name" className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your name" />
                            </label>
                            <label className="text-xl font-bold my-5">Email
                                <input type="email" name="email" required className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your email" />
                            </label>
                            <label className="text-xl font-bold ">Password</label>
                            <div className="flex relative w-full my-3 ">
                                <input type={showPassword ? "text" : "password"}
                                  placeholder="Password"
                                    name="password" required
                                    className="input input-bordered text-[18px] block w-full" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <p className='text-red-500 font-medium'>password error</p>
                            <button className="btn bg-blue-600 border-none text-white hover:text-black text-[18px] w-full capitalize font-semibold">Resister</button>
                            <h2 className="font-bold text-center">Already Have an Account? <Link to='/login' className="text-blue-600 hover:underline ">Please Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;