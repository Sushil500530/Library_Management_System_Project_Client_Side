import { useState } from 'react';
import sidePhoto from '../assets/image/animation_lokavq09_large.gif'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [showPassword,setShowPassword] = useState('');
    return (
        <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1800px] md:h-[1600px] lg:h-screen">
        <div className=" w-full h-screen text-white py-12">
        <h3 className="text-2xl font-semibold pt-8 text-center pb-12 lg:pb-5">Please Login Now</h3>
            <div className='container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-0 md:flex-col lg:flex-row'>
                <div className="w-full h-[550px] lg:w-1/2 p-5">
                    <img src={sidePhoto} className="w-full h-full rounded-md" alt="" />
                </div>
                <div className=" w-full lg:w-1/3 mx-auto mt-12 pb-5 border-2 border-purple-500 rounded-md">
                    <form className="space-y-8 p-5">
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
                        <p className='text-red-500 font-medium m-0'>error password</p>
                        <button className="btn bg-blue-600 border-none text-white hover:text-black text-[18px] w-full capitalize font-semibold">Login</button>
                        <h2 className="font-bold text-center">Don't have an account? <Link to='/resister' className="text-blue-600 hover:underline ">Create an account</Link></h2>
                    </form>
                    <div className="inline-flex items-center justify-center w-full lg:hidden block">
                        <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-black" />
                        <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">Or</span>
                    </div>
                    <p className='text-center hidden lg:block text-xl font-bold text-white'>Or</p>
                    <div  className='w-full md:w-[466px] lg:w-full mx-auto p-5'>
                        <div className="border-2 mx-auto w-full lg:w-[400px] lg:h-[60px] hover:bg-gray-200 cursor-pointer hover:text-blue-500 transition ease-in rounded-full my-5 flex items-center justify-center gap-3">
                            <p className="text-[38px] p-2"><FcGoogle></FcGoogle></p>
                            <h2 className="text-[18px] font-semibold">Continue With Google</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Login;