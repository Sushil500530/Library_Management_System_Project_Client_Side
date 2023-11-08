
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useThemeMode from '../../hooks/useThemeMode';
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';

const Sidbar = () => {
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
        <div className="flex flex-col gap-2">
        {/* Navbar menu content here */}
   
                    {/* Navbar menu content here */}
                    <button onClick={changeTheme} className="bg-transparent btn-sm hover:text-blue-500 transition ">
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
                                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:text-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                                Loign
                            </NavLink>
                    }

  
      </div>
    );
};

export default Sidbar;