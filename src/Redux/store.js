import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slice/AuthSlice'
import CourseSliceReducer from "./Slice/CourseSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: CourseSliceReducer
    },
    devTools: true
});

export default store;