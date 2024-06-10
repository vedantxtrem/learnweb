import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layouts/HomeLayout';
import { deleteCourseLectures, getCourseLectures } from '../../Redux/Slice/LectureSlice';

function Displaylectures() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lectures } = useSelector((state) => state.lecture);
    const { role } = useSelector((state) => state.auth)

    const [currentVideo, setCurrentVideo] = useState(0);

    async function onLectureDelete(courseid, lectureid) {
        await dispatch(deleteCourseLectures({
            courseId: courseid,
            lectureId: lectureid
        }))
        await dispatch(getCourseLectures(courseid))
    }

    useEffect(() => {
        if (!state) {
            navigate('/courses');
        }
        dispatch(getCourseLectures(state._id))
    }, [])



    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] text-white ">
                <div className='text-center text-2xl font-semibold text-yellow-500'>
                    Course Name : {state?.title}
                </div>
                
                <div className="flex justify-center gap-10 w-full">
                    <div className='space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px] '>
                        <video src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                            className='object-fill rounded-tl-lg rounded-tr-lg w-full '
                            controls
                            disablePictureInPicture
                            muted
                            controlsList='nodownload'

                        >

                        </video>

                        <div>
                            <h1>
                                <span className='text-yellow-500'>
                                    Title :
                                </span>
                                {lectures && lectures[currentVideo]?.title}
                            </h1>
                            <p>
                                <span className='text-yellow-500 line-clamp-4'>
                                    Discription :{" "}
                                </span>
                                {lectures && lectures[currentVideo]?.discription}

                            </p>
                        </div>

                    </div>

                    {/* right Section  */}
                    {/* {lectures.length() > 0 &&
                    
                     <div className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px]">
                        <ul className=''>
                            <li className='font-semibold text-xl text-yellow-500 flex items-center justify-between '>
                                <p>Lecutes List</p>
                                {role == "ADMIN" && (
                                    <button onClick={navigate('/course/addlecture')} className='btn-primary px-2 py-1 rounded-md font-semibold text-sm'>
                                        Add new lectures
                                    </button>
                                )}
                            </li>
                            {lectures && lectures.map((lecture, i) => {
                                return (
                                    <li key={lecture._id} className='space-y-2'>
                                        <p className='cursor-pointer' onClick={() => setCurrentVideo(i)}>
                                            <span>
                                                {" "} Lecture {i + 1}:{" "}
                                            </span>
                                            {lecture?.title}
                                            {role == "ADMIN" && (
                                                <button onClick={onLectureDelete(state?._id, lectures?._id)} className='btn-accent px-2 py-1 rounded-md font-semibold text-sm'>
                                                    Delete lectures
                                                </button>
                                            )}
                                        </p>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    } */}
                </div>
            </div>
        </HomeLayout>
    )
}

export default Displaylectures