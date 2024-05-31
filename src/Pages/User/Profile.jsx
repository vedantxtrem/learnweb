import React, { useEffect } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Profile() {

    const userData = useSelector((state) => state?.auth?.data);
    const dispatch = useDispatch();
  return (
    <HomeLayout>
        <div className="min-h-[90vh] flex items-center justify-center">
            <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px]">
                <img
                    src={userData?.avatar?.secure_url}
                    className='rounded-full w-40 m-auto border border-2-black '
                />
                <h3 className='text-xl font-semibold text-center capitalize '>
                    {userData?.fullName}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className='text-center'>Email : </p><p>{userData?.email}</p>
                    
                    <p className='text-center'>Role : </p><p>{userData?.role}</p>

                    <p className='text-center'>Subscription : </p><p>{userData?.subscription?.status == "active"? "Active":"Inactive"}</p>   
                </div>
                <div className="flex justify-center items-center gap-2  ">
                    <Link to="/changepassword" className="w-1/2 p-1   rounded-md text-center font-semibold cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 ">
                        ChangePassword  
                    </Link>
                    <Link to="/user/editprofile" className="w-1/2 p-1  rounded-md text-center font-semibold cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 ">
                        Edit Profile  
                    </Link>
                </div>
                {
                    userData?.subscription?.status === "active" && (
                        <button className='w-full text-white bg-red-700 hover:bg-red-500 transition-all ease-in-out duration-300'>
                            Cancel Subscription
                        </button>
                    )
                }
            </div>
        </div>
    </HomeLayout>
  )
}

export default Profile;