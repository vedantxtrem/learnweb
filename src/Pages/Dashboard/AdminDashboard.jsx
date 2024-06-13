import React, { useEffect } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCourses, deleteCourse } from '../../Redux/Slice/CourseSlice';
import { getStatsData } from '../../Redux/Slice/StatSlice';
import { getPaymentRecord } from '../../Redux/Slice/RazorpaySlice';
import { BsCollectionPlayFill, BsTrash } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { FcSalesPerformance } from 'react-icons/fc';
import { Bar, Pie } from 'react-chartjs-2';

import { FaUsers } from 'react-icons/fa';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);



function AdminDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allUsersCount, subscribedCount } = useSelector((state) => state.stat);
    const { allPayments = [...data], monthlySalesRecord = [] } = useSelector((state) => state?.razorpay);

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                borderColor: ["yellow", "green"]
            },
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sales / Month",
                data: monthlySalesRecord,
                backgroundColor: ["red"],
                borderColor: ["white"],
                borderWidth: 2
            }
        ]
    };

    const myCourses = useSelector((state) => state.course.courseData);

    async function onCourseDelete(id) {
        if (window.confirm("Are you sure you want to delete the course?")) {
            const res = await dispatch(deleteCourse(id));
            if (res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }
    console.log(allPayments);

    useEffect(() => {
        (async () => {
            await dispatch(getAllCourses());
            await dispatch(getStatsData());
            await dispatch(getPaymentRecord());
        })();
    }, [dispatch]);

    return (
        <HomeLayout>
            <div className="w-full  min-h-[90vh] pt-4 flex flex-col justify-center  gap-10 text-white">

                <h1 className="text-center text-3xl md:text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>

                <div className=" md:grid md:grid-cols-2 md:gap-5 m-auto mx-10">

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md ">

                        <div className="md:w-80 md:h-80">
                            <Pie data={userData} />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold sm:text-sm">Registered Users</p>
                                    <h3 className="text-4xl font-bold">{allUsersCount}</h3>
                                </div>
                                <FaUsers className="text-yellow-500 text-5xl" />
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscribed Users</p>
                                    <h3 className="text-4xl font-bold">{subscribedCount}</h3>
                                </div>
                                <FaUsers className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar className="absolute bottom-0 h-80 w-full" data={salesData} />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscription Count</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.length}</h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl" />
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Total Revenue</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.length * 5}</h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:w-full mx-auto w-[90%] self-center flex flex-col items-center justify-center flex-wrap gap-10 mb-10">
                    <div className="flex flex-col md:flex-row w-full  items-center justify-between md:px-20">
                        <h1 className="text-center text-3xl font-semibold w-full sm:w-auto">
                            Courses Overview
                        </h1>

                        <button
                            onClick={() => {
                                navigate("/course/create");
                            }}
                            className="mt-4 sm:mt-0 w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
                        >
                            Create New Course
                        </button>
                    </div>

                    <div className="overflow-x-auto w-full ">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Course Title</th>
                                    <th className="hidden md:table-cell">Course Category</th>
                                    <th className="hidden md:table-cell">Instructor</th>
                                    <th className="hidden md:table-cell">Total Lectures</th>
                                    <th className="hidden md:table-cell">Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {myCourses?.map((course, idx) => (
                                    <tr key={course._id}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            <textarea
                                                readOnly
                                                value={course?.title}
                                                className="w-36 h-auto bg-transparent resize-none overflow-x-scroll"
                                            />
                                        </td>
                                        <td className="hidden md:table-cell">
                                            {course?.category}
                                        </td>
                                        <td className="hidden md:table-cell">
                                            {course?.createdBy}
                                        </td>
                                        <td className="hidden md:table-cell">
                                            {course?.numbersOfLectures}
                                        </td>
                                        <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap hidden md:table-cell">
                                            <textarea
                                                value={course?.description}
                                                readOnly
                                                className="w-80 h-auto bg-transparent resize-none"
                                            />
                                        </td>
                                        <td className="flex justify-center items-center gap-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                onClick={() => navigate("/course/lecture", { state: { ...course } })}
                                            >
                                                <BsCollectionPlayFill />
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                onClick={() => onCourseDelete(course?._id)}
                                            >
                                                <BsTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </HomeLayout>
    );
}

export default AdminDashboard;
