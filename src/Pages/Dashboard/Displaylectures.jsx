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
    const { role } = useSelector((state) => state.auth);

    const [currentVideo, setCurrentVideo] = useState(0);

    async function onLectureDelete(courseId, lectureID) {
        console.log(courseId, lectureID);
        await dispatch(deleteCourseLectures({ courseId: courseId, lectureID: lectureID }));
        await dispatch(getCourseLectures(courseId));
    }

    useEffect(() => {
        console.log(state);
        if (!state) navigate("/courses");
        dispatch(getCourseLectures(state._id));
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
                <div className='flex flex-col text-center justify-between items-center text-white text-4xl font-mono font-bold'>
                   <span className="text-center text-3xl font-semibold text-yellow-500 mb-5  border-b-2  border-yellow-500"> -: Course Name :-</span>  
                   {state?.title}
                </div>

                {(lectures && lectures.length > 0) ?
                    (<div className="flex flex-col md:flex-row justify-center gap-10 w-full">
                        {/* left section for playing videos and displaying course details to admin */}
                        <div className="space-y-5 w-full md:w-[28rem] md:p-2 rounded-lg shadow-[0_0_10px_black]">
                            <video
                                src={lectures && lectures[currentVideo]?.secure_url}
                                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                                controls
                                disablePictureInPicture
                                muted
                                controlsList="nodownload"

                            >
                            </video>
                            <div>
                                <h1>
                                    <span className="text-yellow-500"> Title: {" "}
                                    </span>
                                    {lectures && lectures[currentVideo]?.title}
                                </h1>
                                <p>
                                    <span className="text-yellow-500 line-clamp-4">
                                        Description: {" "}
                                    </span>
                                    {lectures && lectures[currentVideo]?.description}
                                </p>
                            </div>
                        </div>

                        {/* right section for displaying list of lectres */}
                        <ul className="w-full md:w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4 text-white">
                            <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                                <p>Lectures list</p>
                                {role === "ADMIN" && (
                                    <button onClick={() => navigate("/course/addlecture", { state: { ...state } })} className=" text-white bg-green-600 px-2 py-1 rounded-md font-semibold text-sm">
                                        Add new lecture
                                    </button>
                                )}
                            </li>
                            {lectures &&
                                lectures.map((lecture, idx) => {
                                    return (
                                        <li className="space-y-2" key={lectures[idx]._id} >
                                            <p className="cursor-pointer" onClick={() => setCurrentVideo(idx)}>
                                                <span>
                                                    {" "} Lecture {idx + 1} : {" "}
                                                </span>
                                                {lecture?.title}
                                            </p>
                                            {role === "ADMIN" && (
                                                <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="bg-red-600 px-2 py-1 rounded-md font-semibold text-sm">
                                                    Delete lecture
                                                </button>
                                            )}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>) : (
                        role === "ADMIN" && (
                            <button onClick={() => navigate("/course/addlecture", { state: { ...state } })} className="bg-green-600 px-2 py-1 rounded-md font-semibold text-xl text-white hover:bg-green-900 transition-all ease-in-out duration-300">
                                Add new lecture
                            </button>
                        )
                    )}
            </div>
        </HomeLayout>
    )
}

export default Displaylectures