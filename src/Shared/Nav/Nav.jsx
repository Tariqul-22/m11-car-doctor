import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hocks/useAuth";
import useAxiosSecure from "../../Hocks/useAxiosSecure";

const Nav = () => {
    const {user, logOut} = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            axiosSecure.post('/logout', user)
            .then(res =>{
                console.log(res.data);
                console.log('logout successfully');
                toast('logout successfully')
            })
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const navList = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/services'><li>Services</li></NavLink>
        {/* <NavLink to='/blog'><li>Blog</li></NavLink> */}
        <NavLink to='/contact'><li>Contact</li></NavLink>
        {
            user ? <>
            <NavLink to='/myBookings'><li>My Bookings</li></NavLink>
            <NavLink><button onClick={handleLogOut}><li>Log Out</li></button></NavLink>
            </>
            : <NavLink to='/login'><li>Login</li></NavLink>
        }
        
        
    </>
    return (
        <div className="navbar bg-base-100 my-10 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img className="h-20" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end space-x-6">
            <SlHandbag></SlHandbag>
            <IoSearchOutline></IoSearchOutline>
            <button className="btn btn-orange-outline">Appointment</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Nav;