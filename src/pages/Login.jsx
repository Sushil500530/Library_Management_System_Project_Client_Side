import { useState } from 'react';
import sidePhoto from '../assets/image/animation_lokavq09_large.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';


const Login = () => {
    const [showPassword,setShowPassword] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const {loginUser,googleSignIn} = useAuth()
    const handleLoign = async(e) => {
        e.preventDefault();
        const toastId = toast.loading('Logging in..');
        console.log('email and password is : ',email,password);
       await loginUser(email,password)
        .then(result => {
            console.log(result.user);
            if(result.user){
                toast.success('Logged in successfully!', { id: toastId });
                return navigate(location?.state ? location.state : "/")
            }
        })
        .catch(() => {
            toast.error('invalid password', { id: toastId });
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            if(result.user){
                toast.success('Logged in successfully!');
                return navigate(location?.state ? location.state : "/")
            }
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="bg-[url('https://i.ibb.co/jffJC3v/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1800px] md:h-[1600px] lg:h-[90vh] bg-fixed">
        <div className=" w-full">
        <h3 className="text-2xl font-semibold pt-8 text-center pb-12 lg:pb-5">Please <span className='text-purple-500 font-bold text-4xl'>Login</span> Now</h3>
            <div className='container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-0 md:flex-col lg:flex-row'>
                <div className="w-full h-[550px] lg:w-1/2 p-5">
                    <img src={sidePhoto} className="w-full h-full rounded-md" alt="" />
                </div>
                <div className=" w-full lg:w-1/3 mx-auto mt-12 pb-5 border-2 pt-8 border-purple-500 rounded-md m-5">
                    <form onSubmit={handleLoign} className="space-y-8 p-5">
                        <label className="text-xl font-bold my-5">Email
                            <input type="email" name="email"  onBlur={(e) => setEmail(e.target.value)} required className="px-3 input-bordered py-2 text-black input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your email" />
                        </label>
                        <label className="text-xl font-bold ">Password</label>
                        <div className="flex relative w-full my-3 ">
                            <input type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password" onBlur={(e) => setPassword(e.target.value)} required
                                className="input input-bordered text-[18px] text-black block w-full" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex gap-3">
                                <input type="checkbox" name='checkbox' className=" w-5 h-5 cursor-pointer" />
                                <label className='font-medium'>Please accept our  <a href='#' className='text-purple-200 link link-hover'>terms and conditions</a></label>
                            </span>
                            <p className="text-white underline"><Link to="#">Forget Password</Link></p>
                        </div>
                        <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full">Login</button>
                        <h2 className="font-bold text-center">Don't have an account? <Link to='/resister' className="text-blue-600 hover:underline ">Create an account</Link></h2>
                    </form>
                    <div className="divider text-center text-xl font-bold text-white">Or, Continue With</div>
                    <div onClick={handleGoogleSignIn} className='w-full md:w-[466px] lg:w-full mx-auto p-5'>
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