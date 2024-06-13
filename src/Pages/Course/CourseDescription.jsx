import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layouts/HomeLayout';
import { useSelector } from 'react-redux';

function CourseDescription() {
  const { state } = useLocation();
  useEffect(() => {

  }, []);

  const { role, data } = useSelector((s) => s.auth)

  const Navigate = useNavigate();

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 flex flex-col items-center justify-center text-white">
        <div className="md:grid md:grid-cols-2 gap-10 p-4 py-10 relative">
          <div className='space-y-5'>
            <img
              className='w-full h-64 rounded-md'
              alt="thumbnail"
              src={state?.thumbnail?.secure_url}
            />
            <div className='space-y-4'>
              <div className='flex flex-col items-center justify-between text-xl'>

                <p className='font-semibold '>
                  <span className='text-yellow-500 font-bold'>
                    Total lectures :{" "}
                  </span>
                  {state?.numbersOfLectures}
                </p>

                <p className='font-semibold '>
                  <span className='text-yellow-500 font-bold'>
                    Instructor :{" "}
                  </span>
                  {state?.createdBy}
                </p>

              </div>

            </div>

          </div>
          <div className='space-y-2 text-xl'>
            <h1 className='text-yellow-500 text-3xl mb-5 text-center font-bold'>
              {state?.title}
            </h1>
            <p className="text-yellow-500 sm:w-full sm:text-center ">
              Course description :
            </p>
            <p>{state?.description}</p>
            {
              data?.subscription?.status == "active" || data?.role == "ADMIN" ? (
                <button onClick={() => Navigate('/course/lecture', { state: { ...state } })} className='bg-yellow-600 text-xl rounded-xl font-bold px-5 py-2 w-full hover:bg-yellow-500 transition-all ease-in-out duration-200'>
                  watch lectures
                </button>
              ) : (
                <button onClick={() => Navigate('/checkout')} className='bg-yellow-600 text-xl rounded-xl font-bold px-5 py-2 w-full hover:bg-yellow-500 transition-all ease-in-out duration-200'>
                  Subscribe
                </button>
              )
            }
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default CourseDescription;