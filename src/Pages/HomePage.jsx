import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'
import HomePageImage from '../assets/homePageMainImage.png'

function HomePage() {


    return (
        <HomeLayout>
            <div className=' pt-10 mx-12 h-[90vh] ' >
                {/* <div className=" px-4 w-full lg:w-1/2  lg:px-20  md:flex md:flex-col ">

                    <h3 className="flex flex-col md:flex-row w-full text-3xl  m-1 p-1 md:text-4xl">
                        <span className='sm:w-full w-fit'>Find out best </span>
                        <span className='text-yellow-300  font-bold sm:w-full my-2 animate-pulse'>
                            Online Courses
                        </span>
                    </h3>

                    <p className="w-full text-xl border-2 border-yellow-200 rounded-2xl px-2 py-4">
                        We have the large library of courses taaught by highly skilled and qualifed faculties at very afordable cost.
                    </p>

                    <div className='flex flex-col mt-3'  >

                        <Link className='w-full bg-yellow-600 px-5 py-2 rounded-xl mt-3 font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' to="/courses">
                            <button  >
                                Explore Courses
                            </button>
                        </Link>
                        <Link className='w-full px-5 border-2 border-yellow-500 pr-10  py-2 rounded-xl mt-3 font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' to="/contact">
                            <button  >
                                Contact...Us...
                            </button>
                        </Link>

                    </div>

                </div>

                <div className='w-full hidden md:block md:w-1/2  items-center justify-center'>
                    <img src={HomePageImage} alt="homepage image " />
                </div> */}
                <div class="h-full w-full md:pt-24 flex flex-wrap">
                    <div
                        class="text-center px-4 w-full h-fit lg:h-[230px] md:px-2 lg:px-20 md:text-left md:w-6/12 md:flex md:flex-col md:justify-between">
                        <h3 class="text-3xl md:text-4xl text-white mt-[10%] font-bold">
                            Find out best Courses..
                            <span class="block text-yellow-500 animate-pulse font-bold">Online platform..</span>
                        </h3>
                        <p class="text-gray-100 pt-2 md:pt-6 text-xl md:mt-0 ">
                            We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.We provide professionals with the knowledge, skill and discipline they need to be 10x more successful.
                        </p>
                        <div className='w-full flex flex-col gap-3 md:flex-row md:mt-6'>
                            <Link className='mx-auto md:m-0 mt-2 md:mt-4 bg-yellow-600 text-white font-bold px-3 py-2 rounded-3xl cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' to="/courses">
                                <button  >
                                    Explore Courses
                                </button>
                            </Link>
                            <Link className='mx-auto md:m-0  md:mt-4 bg-transparent border-2 border-yellow-500 text-white px-3 py-2 rounded-3xl cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' to="/contact">
                                <button  >
                                    Contact...Us...
                                </button>
                            </Link>
                        </div>
                        <div class="w-full h-fit md:hidden  md:w-1/2 items-center justify-center">
                            <img src={HomePageImage} alt="homepage image " />
                        </div>
                    </div>
                    <div class="w-full h-full hidden md:block md:w-1/2  items-center justify-center">
                        <img src={HomePageImage} alt="homepage image " />
                    </div>
                </div>
            </div>
        </HomeLayout >
    )
}

export default HomePage