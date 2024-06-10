import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    lectures : []
}

export const getCourseLectures = createAsyncThunk('/course/lecture/get',async (c_id)=>{
    try {
        const response = axiosInstance.get(`/courses/${c_id}`);
        toast.promise(response,{
            loading : "loading the  course lectures",
            success : "lectures load successfully",
            error : "failed to load the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const addCourseLectures = createAsyncThunk('/course/lecture/add',async (data)=>{
    try {
        const formData = new FormData();

        formData.append("lectures", data.lectures);
        formData.append("title",data.title);
        formData.append("description",data.description);

        console.log("data :",data);

        const response = axiosInstance.post(`/courses/${data.id}`,formData);
        toast.promise(response,{
            loading : "Adding the  course lectures",
            success : "Course lectures Added successfully",
            error : "failed to Add the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const deleteCourseLectures = createAsyncThunk('/course/lecture/delete',async (data)=>{
    try {
        const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureID}`);
        toast.promise(response,{
            loading : "deleting the course lectures",
            success : "lectures deleted successfully",
            error : "failed to delete the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const lecturesSlice = createSlice({
    name : "lectureSlice",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
            .addCase(getCourseLectures.fulfilled, (state,action)=>{
                state.lectures = action?.payload?.lectures;
            })
            .addCase(addCourseLectures.fulfilled, (state,action)=>{
                state.lectures = action?.payload?.course?.lectures;
            })
    }
})

export default lecturesSlice.reducer;