import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slice/AuthSlice'
import CourseSliceReducer from "./Slice/CourseSlice";
import razorpaySliceReducer from "./Slice/RazorpaySlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: CourseSliceReducer,
        razorpay: razorpaySliceReducer
    },
    devTools: true
});

export default store;