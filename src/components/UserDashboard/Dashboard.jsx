import { NavLink, Outlet } from "react-router-dom";
import Header from "../header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto dark:text-white">
                <main className="dark:text-white">
                    <div className="grid py-5 gap-5 grid-cols-12 min-h-screen">
                        {/* menus */}
                        <div className="col-span-3  h-full flex flex-col items-center font-medium space-y-3 dark:active:text-white">
                            <NavLink to="/dashboard" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 w-full btn-outline hover:border dark:text-white hover:text-black  text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost w-full btn-outline hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }>Home
                            </NavLink>
                            <NavLink to="/dashboard/my-book" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 w-full btn-outline dark:text-white hover:text-black text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost w-full btn-outline hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }> My Book
                            </NavLink>
                            <NavLink to="/dashboard/add-book" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 w-full btn-outline dark:text-white hover:text-black text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost w-full btn-outline hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }> Add Book
                            </NavLink>
                            <NavLink to="/dashboard/update-book" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 w-full btn-outline dark:text-white hover:text-black text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost w-full btn-outline hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
                            }> Update Book
                            </NavLink>
                            <NavLink to="/dashboard/manage-book" className={({ isActive }) =>
                                isActive ? 'btn bg-purple-500 w-full btn-outline dark:text-white hover:text-black hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost w-full btn-outline hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                                 Manage Book
                            </NavLink>
                        </div>
                        <div className=" col-span-9 h-full dark:text-white">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;