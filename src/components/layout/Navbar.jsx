import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, userLogOut } = useAuth()
    console.log(user);

    const handleLogOut = () => {
        userLogOut()
        .then(() => {})
        .catch(error => {
            console.error(error);
        })
    }
    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }>
            Home
        </NavLink>
        <NavLink
            to="/add-book"
            className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }>
            Add Book
        </NavLink>
        <NavLink
            to="/all-books"
            className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }>
            All Books
        </NavLink>
        <NavLink
            to="/borrow-books"
            className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
            Borrow Books
        </NavLink>
        {
            user?.email ? <div className="flex">
                <div className="dropdown flex items-center justify-center dropdown-start lg:dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar -mt-2">
                        <div className="w-10 rounded-full">
                            {
                                user?.email ? <img src={user?.photoURL} alt={`${user?.email}`} /> : <img src="https://i.ibb.co/Jt0tPSh/user.png" alt={`${user?.email}`} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm relative lg:-left-20 top-10 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between text-black">
                                {
                                    user?.email && <p className="text-black">{user?.displayName}</p>
                                }
                                <p>Profile</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <button onClick={handleLogOut} className="btn bg-red-500 text-white border-none hover:text-black capitalize text-[18px] py-0 btn-sm">Louout</button>
            </div> :
                <NavLink to="/login" className={({ isActive }) =>
                    isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                    Loign
                </NavLink>
        }

    </>
    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex ">
                    {/* Navbar */}
                    <nav className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-fixed bg-no-repeat bg-blend-overlay bg-cover w-full">
                        <div className="navbar lg:container lg:mx-auto flex flex-row-reverse lg:flex-row justify-between">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className=" px-2 mx-2 w-28 h-14 lg:w-[276px] lg:h-[76px] ">
                               <img src="https://i.pinimg.com/564x/f1/03/2a/f1032ab7db04b3f56b43e81c9b21ec7a.jpg" className="w-full h-full" alt="" />
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    <div className="flex gap-2">
                                        {
                                            navLinks
                                        }

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;