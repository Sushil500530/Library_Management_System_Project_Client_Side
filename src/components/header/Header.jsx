/* eslint-disable react/prop-types */
import Navbar from "../layout/Navbar";
import Sidbar from "../layout/Sidbar";



const Header = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                    <Navbar />
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu p-4 w-80 min-h-full py-2">
                    {/* Sidebar content here */}
                    <Sidbar></Sidbar>
                </div>
            </div>
        </div>
    );
};

export default Header;