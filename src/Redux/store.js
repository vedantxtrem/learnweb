import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slice/AuthSlice'
import CourseSliceReducer from "./Slice/CourseSlice";
import razorpaySliceReducer from "./Slice/RazorpaySlice";
import LectureSlicereducer from "./Slice/LectureSlice";
import statSliceReducer from "./Slice/StatSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: CourseSliceReducer,
        razorpay : razorpaySliceReducer,
        lecture : LectureSlicereducer,
        stat : statSliceReducer
    },
    devTools: true
});

export default store;