import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProfileEnrolledCourses } from '../../../services/operations/profileAPIs';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getAvgRating from '../../../utils/getAvgRating';
import RatingStars from '../../Common/RatingStars';
import IconBtn from '../../Common/IconBtn';
import CourseReviewModal from './CourseReviewModal';

const EnrolledCourses = () => {
    const [reviewModal, setReviewModal] = useState(false);
    const {token} = useSelector((state) => state.auth);
    const [enrolledCourses, setEnrolledCourses] = useState(null);
    const [course, setCourseId] = useState(null);
    const navigate = useNavigate();

    const getEnrolledCourses = async() => {
        try{
            const response = await getProfileEnrolledCourses(token);
            setEnrolledCourses(response);
        }
        catch(error){
            console.log("Unable to Fetch the Courses")
        }
    }

    useEffect(() => {
        getEnrolledCourses();
    }, [])

    return (
        <div>

            <div className="text-3xl text-richblack-50">
                Bought items
            </div>
            {
                !enrolledCourses ? (
                    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                        <div className="spinner"></div>
                    </div>
                ) : !enrolledCourses.length ? (<div className="grid h-[10vh] w-full place-content-center text-richblack-50">
                    You have not Bought any item
                </div>) : (
                    <div className="my-8 text-richblack-50">
                        <div className="flex rounded-t-lg bg-richblack-500 ">
                            <p className="w-[30%] px-5 py-3">Item</p>
                            <p className="flex-1 -px-10 py-3">Item Name</p>
                            <p className="flex-1 -px-10 py-3">Rating and Review</p>
                        </div>
                        {
                            enrolledCourses.map((course, i, arr) => {
                                return (
                                    <div className={`flex items-center border border-richblack-700 ${
                                        i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                    }`}
                                    key={i}>
                                        <div className="flex cursor-pointer items-center gap-4 px-5 py-3">
                                            <img src={course.thumbnail} className="h-10 w-20 rounded-lg object-cover mr-[200px]"/>
                                            <div className="flex flex-col gap-2">
                                                <p className="font-semibold">{course.name}</p>
                                            </div>
                                            <div className="flex flex-col gap-2 ml-[260px]">
                                            <div className="flex items-center gap-2">
                                                <span className="text-yellow-5">{String(getAvgRating(course.ratingsAndReviews))}</span>
                                                <div className='flex items-center gap-2'>
                                                    <RatingStars Review_Count={Number(getAvgRating(course.ratingsAndReviews))}/>
                                                </div>
                                                <span className="text-richblack-400">
                                                    {course?.ratingsAndReviews?.length} Ratings
                                                </span>
                                            </div>
                                            <div className='-ml-[10px]'>
                                                <IconBtn
                                                    text="Add Review"
                                                    customClasses="ml-[35px] mt-[10px]"
                                                    onclick={() => {
                                                        setReviewModal(true)
                                                        setCourseId(course._id)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                )
            }
            {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} courseId={course}/>}
        </div>
    )
}

export default EnrolledCourses
