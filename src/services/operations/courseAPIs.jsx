import { apiConnector } from "../apiconnecter";
import { courseEndpoints } from "../apis";
import { toast } from "react-hot-toast";

const {GET_INSTUCTOR_COURSE_DETAILS_API, DELETE_COURSE_API, GET_ALL_CATEGORIES_API, EDIT_COURSE_API, CREATE_COURSE_API, GET_COURSE_DETAILS_API, CREATE_RATING_API, GET_ALL_RATINGS_API
    } = courseEndpoints;

export async function getInstructorCourseDetails(token){
    const toastId = toast.loading("Loading..!!")
    let result = [];
    try{
        const response = await apiConnector("GET", GET_INSTUCTOR_COURSE_DETAILS_API, null, {
            Authorization: `Bearer ${token}`,
        })
        console.log("INSTRUCTOR COURSES API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Instructor Items")
        }
        result = response.data.data;
    }
    catch(error){
        console.log("Error in getting Instructor Item Details API");
        console.error(error);
    }
    toast.dismiss(toastId);
    return result;
}

export async function deleteCourse(courseId, token){
    const toastId = toast.loading("Loading..!!!")
    try{
        const response = await apiConnector("DELETE", DELETE_COURSE_API, {courseId}, {
            Authorization: `Bearer ${token}`,
        })
        console.log("Response Successful", response);
    }
    catch(error){
        console.log("Error in deleting the Item API");
        console.error(error);
    }
    toast.dismiss(toastId);
}

export async function getAllCategories(){
    const toastId = toast.loading("Loading..!!")
    let result = [];
    try{
        const response = await apiConnector("GET", GET_ALL_CATEGORIES_API, null)
        console.log("Categories API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")``
        }
        result = response.data.data;
    }
    catch(error){
        console.log("Error in getting Categories API");
        console.error(error);
    }
    toast.dismiss(toastId);
    return result;
}

export async function editCourseDetails(token, formData) {
    const toastId = toast.loading("Loading..!!")
    let result = []
    try{
        const response = await apiConnector("PUT", EDIT_COURSE_API, formData, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        toast.success("Item Details Updated Successfully")
        result = response?.data?.data
    }
    catch(error){
        console.log("Error in Editing Course API");
        console.error(error);
    }
    toast.dismiss(toastId);
    return result
}

export async function createCourse(token, formData){
    const toastId = toast.loading("Loading..!!")
    let result = []
    try{
        const response = await apiConnector("POST", CREATE_COURSE_API, formData, {
            Authorization: `Bearer ${token}`,
        })
        console.log("Create Item API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        toast.success("Item Created Successfully")
        result = response?.data?.data
    }
    catch(error){
        console.log("Error in Creating Course API");
        console.error(error);
    }
    toast.dismiss(toastId);
    return result
}

export async function getCourseDetails(courseId){
    let result = []
    try{
        const response = await apiConnector("POST", GET_COURSE_DETAILS_API, {courseId})
        console.log("Get Course details API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Course Details")
        }
        result = response?.data?.data
    }
    catch(error){
        console.log("Error in Creating Course API");
        console.error(error);
    }
    return result
}


export async function createRating(token, courseID, rating, review){
    const toastId = toast.loading("Loading..!!")
    try{
        const response = await apiConnector("POST", CREATE_RATING_API, {courseID, rating, review}, {
            Authorization: `Bearer ${token}`,
        })
        console.log("Create Rating API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Rate the Item")
        }
        toast.success("Item Rated Successfully")
    }
    catch(error){
        console.log("Error in Rating the Item API");
        console.error(error);
    }
    toast.dismiss(toastId);
}


export async function getRatingsAndReviews(){
    let result = []
    try{
        const response = await apiConnector("GET", GET_ALL_RATINGS_API, null)
        console.log("Get Ratings And Reviews API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Get Ratings And Reviews Details")
        }
        result = response?.data?.data
    }
    catch(error){
        console.log("Error in Creating Item API");
        console.error(error);
    }
    return result
}





