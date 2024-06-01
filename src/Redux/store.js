import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slice/AuthSlice'
import CourseSliceReducer from "./Slice/CourseSlice";
import razorpaySliceReducer from "./Slice/RazorpaySlice";
import LectureSlicereducer from "./Slice/LectureSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: CourseSliceReducer,
        razorpay: razorpaySliceReducer,
        lecture : LectureSlicereducer,
    },
    devTools: true
});

export default store;