import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useThemeMode from "../../hooks/useThemeMode";
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
    const { user, userLogOut } = useAuth();
    const { changeTheme, mode } = useThemeMode();
    // console.log(user);

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className=" w-full dark:bg-zinc-900">
            {/* Navbar */}
            <nav className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] dark:bg-transparent bg-fixed bg-no-repeat bg-blend-overlay bg-cover">
                <div className="navbar container mx-auto lg:flex-row flex flex-row-reverse  justify-between">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className=" px-2 mx-2 w-28 h-14 lg:w-[276px] lg:h-[76px] ">
                        <img src="https://i.pinimg.com/564x/f1/03/2a/f1032ab7db04b3f56b43e81c9b21ec7a.jpg" className="w-full h-full" alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex items-center gap-2 dark:text-white">
                            {/* Navbar menu content here */}
                            <button onClick={changeTheme} className="bg-transparent btn-sm hover:text-blue-500 transition flex items-center justify-center">
                                {mode === "dark" ? <BsSun className='text-3xl'></BsSun> : <MdOutlineDarkMode className='text-3xl'></MdOutlineDarkMode>}
                            </button>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }>Home
                            </NavLink>
                            <NavLink to="/add-book" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }> Add Book
                            </NavLink>
                            <NavLink to="/all-books" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }>All Books
                            </NavLink>
                            <NavLink to="/borrow-books" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                                Borrow Books
                            </NavLink>
                            {
                                user?.email ? <div className="flex items-center justify-center">
                                    <NavLink to="/dashboard" className={({ isActive }) =>
                                        isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                                       Dashboard
                                    </NavLink>
                                    <div className="dropdown flex items-center justify-center dropdown-start lg:dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar -mt-2">
                                            <div className="w-10 rounded-full">
                                                {
                                                    user?.email ? <img src={user?.photoURL} alt={`${user?.email}`} /> : <img src="https://i.ibb.co/Jt0tPSh/user.png" alt={`${user?.email}`} />
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm relative lg:-left-20 top-10 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-medium">
                                            <NavLink to="/user" className="px-4 py-2 hover:bg-base-300 rounded-lg" >
                                                {
                                                    user?.email && <p className="text-black">{user?.displayName}</p>
                                                }

                                            </NavLink>
                                            <NavLink to="/user/orders" className="px-4 py-2 hover:bg-base-300 rounded-lg">
                                                Profile
                                            </NavLink>
                                            <div
                                                onClick={handleLogOut}
                                                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                                            >
                                                Logout
                                            </div>
                                        </ul>
                                    </div>
                                    <button onClick={handleLogOut} className="btn bg-red-500 text-white border-none hover:text-black capitalize text-[18px] py-0 btn-sm">Louout</button>
                                </div> :
                                    <NavLink to="/login" className={({ isActive }) =>
                                        isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:text-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                                        Loign
                                    </NavLink>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;