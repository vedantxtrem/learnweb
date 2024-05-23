import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'
import HomePageImage from '../assets/homePageMainImage.png'

function HomePage() {
  return (
    <HomeLayout>
        <div className='pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] ' >
            <div className='w-1/2 space-y-6' >
                <h1 className='text-5xl font-semibold '>
                    Find out best 
                    <span className='text-yellow-300 font-bold ml-3'>
                         Online Courses
                    </span>
                </h1>
                <p className='text-xl text-gray-200'>
                    We have the large library of courses taaught by highly skilled and qualifed faculties at very afordable cost.
                </p>
                <div className='space-x-6 ' >
                    <Link to="/courses">
                        <button className='bg-yellow-600 px-5 py-2 rounded-xl   font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' >
                            Explore Courses
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className='border-2 border-yellow-500 px-5 py-2 rounded-xl  font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all ease-in-out' >
                            contact us
                        </button>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img src={HomePageImage} alt="homepage image " />
            </div>
        </div>
    </HomeLayout>
  )
}

export default HomePage