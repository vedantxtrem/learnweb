import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import Aboutimage from '../assets/aboutMainImage.png'
import apj from '../assets/apj.png'
import billGates from '../assets/billGates.png'
import einstein from '../assets/einstein.png'
import nelsonMandela from '../assets/nelsonMandela.png'
import steveJobs from '../assets/steveJobs.png'

function Aboutus() {
    return (
        <HomeLayout>
            <div className='pl-20 pt-20 flex flex-col text-white'>
                <div className='flex justify-around gap-5 mx-10  items-center'>
                    <section className='w-1/2 space-y-10'>
                        <h1 className='text-5xl text-yellow-500 font-semibold '>
                            Affordale and Quality Education
                        </h1>
                        <p className='text-xl text-gray-300'>
                            Our goal is to provide the afordable and Quality Education to the world .
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perspiciatis nihil
                            optio exercitationem sunt? Accusantium officiis obcaecati commodi nulla, natus amet
                            at excepturi eum error. Odio corrupti sunt architecto voluptas.
                        </p>
                    </section>
                    <div className='w-[40%]'>
                        <img
                            id='text1'
                            className='drop-shadow-2xl'
                            style={{
                                filter: 'drop-shadow(0px 10px 10px rgb(0,0,0))'
                            }}
                            src={Aboutimage} alt="about main image" />
                    </div>
                </div>

                <div className="carousel m-auto w-1/2 my-16">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%] w-full'>
                            <img className="w-40 rounded-full border-2 border-gray-400" src={apj}  />
                            
                            <h1 className='text-2xl text-yellow-400 '>A.P.J.Abdul Kalam</h1>
                            <p className='text-xl text-gray-200'>
                                "Small aim is crime , have great aim"
                            </p>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%] w-full'>
                            <img className="w-40 rounded-full border-2 border-gray-400" src={billGates}  />
                            <h1 className='text-2xl text-yellow-400 '>Bill Gates</h1>
                            <p className='text-xl text-gray-200'>
                                "Patience is a key element of success."
                            </p>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%] w-full' >
                            <img className="w-40 rounded-full border-2 border-gray-400" src={einstein}  />
                            <h1 className='text-2xl text-yellow-400 '>Sir Einstein</h1>
                            <p className='text-xl text-gray-200'>
                                "The true sign of intelligence is not knowledge but imagination."
                            </p>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%] w-full'>
                            <img className="w-40 rounded-full border-2 border-gray-400" src={nelsonMandela}  />

                            <h1 className='text-2xl text-yellow-400 '>Nalson Mandela</h1>
                            <p className='text-xl text-gray-200'>
                                "Education is the most powerfull tool you can Change the World"
                            </p>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%] w-full'>
                            <img className="w-40 rounded-full border-2 border-gray-400" src={steveJobs}/>
                            <h1 className='text-2xl text-yellow-400 '>Steve Jobs</h1>
                            <p className='text-xl text-gray-200'>
                                "Don’t let the noise of others’ opinions drown out your own inner voice."
                            </p>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Aboutus;