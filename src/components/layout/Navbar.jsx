import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink to="/login" className={({ isActive }) =>
            isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
            Loign
        </NavLink>
        {/* {user?.email ? (
                <button className="btn btn-ghost btn-sm" onClick={logout}>
                    Logout
                </button>
            ) : (
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                    }
                >
                    Login
                </NavLink>
            )} */}
    </>
    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex ">
                    {/* Navbar */}
                    <nav className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full">
                        <div className="navbar lg:container lg:mx-auto flex flex-row-reverse lg:flex-row">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 text-5xl font-bold">
                                logo
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