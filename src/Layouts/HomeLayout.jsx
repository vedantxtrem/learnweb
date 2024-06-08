import React from 'react'
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, logout } from '../Redux/Slice/AuthSlice';


function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking if user is logged in
    const isLoggedIn = useSelector((state)=> state?.auth?.isLoggedIn);

    // for displaying the options acc to role 
    const role = useSelector((state)=> state?.auth?.role);

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "auto";
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        changeWidth();
    }

    async function handleLogout (e){ 
        e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success);
        navigate('/')
    }

    return (
        <div className='min-h-[90vh] '>
            <div className='drawer absolute left-0 z-50 w-fit'>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="cursor-pointer relative  ">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className='font-bold text-white m-4 '
                        />
                    </label>
                </div>
                <div className="drawer-side w-0 ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-48 h-full sm:w-80 relative bg-base-300 text-base-content">


                        {/* Sidebar content here */}

                        <li className='w-fit absolute right-2 z-50 '>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={"24px"} />
                            </button>
                        </li>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>

                        {isLoggedIn && role == 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard"> Admin Dashboard</Link>
                            </li>
                        )}
                        {isLoggedIn && role == 'ADMIN' && (
                            <li>
                                <Link to="/course/create"> Create Course</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/courses" >All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact" >Contact us</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        {!isLoggedIn && (
                            <li className='absolute bottom-6 w-[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className='btn-primary bg-blue-800 px-4 py-2 font-semibold rounded-md w-full'>
                                    <Link to="/login">Login</Link>
                                </button>
                                <button className='btn-primary  bg-pink-600 px-4 py-2 font-semibold rounded-md w-full'>
                                    <Link to="/Signup">Signup</Link>
                                </button>
                            </div>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className='absolute bottom-6 w-[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className='btn-primary bg-blue-800 px-4 py-2 font-semibold rounded-md w-full'>
                                    <Link to="/user/profile">Profile</Link>
                                </button>
                                <button className='btn-primary  bg-pink-600 px-4 py-2 font-semibold rounded-md w-full'>
                                    <Link onClick={handleLogout}>Logout</Link>
                                </button>
                            </div>
                            </li>
                        )}
                        
                    </ul>
                </div>
            </div>

            {/*  children */}
            {children}

            <Footer/>
        </div>
    )
}

export default HomeLayout