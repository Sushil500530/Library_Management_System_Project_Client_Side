import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import sidePhoto from '../assets/image/animation_lokavq09_large.gif'
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";



const Resister = () => {
    const [showPassword,setShowPassword] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {createUser} =useAuth();
    const navigate = useNavigate()

    const handleResister = async(e) => {
        e.preventDefault();
        const toastId = toast.loading('resister proccessing....');
        if (password.length < 6) {
            return  toast.error("password should be at least 6 character or longer",{ id: toastId });
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('your password should have at least one uppercase characters.', { id: toastId });
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/.test(password)) {
            return toast.error("you should be at least one special character", { id: toastId });
        }
       await createUser(email,password)
        .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
                displayName: name,
                photoURL: "https://i.ibb.co/Jt0tPSh/user.png"
            })
            .then(() => {})
            .catch(error => {
                console.error(error);
            })
            
            if(result.user){
                toast.success('resister successfully....!',{ id: toastId });
                navigate('/login')
            }

        })
        .catch(error => {
            toast.error(error.message, { id: toastId });
            console.log(error);
        })
        console.log('document of', name,email,password);
    }
    return (
        <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1400px] lg:h-screen">
            <div className=" w-full h-screen py-12">
            <h3 className="text-2xl font-semibold text-black lg:text-white text-center pb-12">Please Resister Now</h3>
                <div className='container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-0 md:flex-col lg:flex-row'>
                    <div className="w-full h-[550px] lg:w-1/2 p-5">
                        <img src={sidePhoto} className="w-full h-full rounded-md" alt="" />
                    </div>
                    <div className=" w-full lg:w-1/3 mx-auto mt-12 pb-5 border-2 border-purple-500 rounded-md">
                        <form onSubmit={handleResister} className="space-y-8 p-5">
                            <label className="text-xl font-bold my-5">Name
                                <input type="text" onBlur={(e) => setName(e.target.value)} name="name" className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your name" />
                            </label>
                            <label className="text-xl font-bold my-5">Email
                                <input type="email" onBlur={(e) => setEmail(e.target.value)} name="email" required className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your email" />
                            </label>
                            <label className="text-xl font-bold ">Password</label>
                            <div className="flex relative w-full my-3 ">
                                <input type={showPassword ? "text" : "password"}
                                  placeholder="Password"
                                  onBlur={(e) => setPassword(e.target.value)}
                                    name="password" required
                                    className="input input-bordered text-[18px] block w-full" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <button className="btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize w-full">Resister</button>
                            <h2 className="font-bold text-center">Already Have an Account? <Link to='/login' className="text-blue-600 hover:underline ">Please Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;