import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCourseDetails } from '../services/operations/courseAPIs';
import { useState } from 'react';
import getAvgRating from '../utils/getAvgRating';
import RatingStars from '../Components/Common/RatingStars';
import { BiInfoCircle } from "react-icons/bi"
import { formatDate } from '../services/formatDate';
import CourseDetailsCard from '../Components/core/Course/CourseDetailsCard';
import Footer from '../Components/Common/Footer';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import ConfirmationModal from '../Components/Common/ConfirmationModal';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { toast } from 'react-hot-toast';
import { ACCOUNT_TYPE } from '../utils/Constants';

const CourseDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState(null);
    const [avgReviewCount, setAvgReviewCount] = useState(0);
    const [isActive, setIsActive] = useState(Array(0));
    const [confirmationModal, setConfirmationModal] = useState(null);
    const [cartFlag, setCartFlag] = useState(false);
    const {cart} = useSelector((state) => state.cart)
    const [loading, setLoading] = useState(false);

    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state) => state.profile)

    console.log(courseId, "akash is");

    useEffect(() => {
        (async () => {
            setLoading(true)
            const result = await getCourseDetails(courseId);
            console.log(result);
            setCourseDetails(result);
            setLoading(false)
        })()
    }, [courseId])

    useEffect(() => {
        const count = getAvgRating(courseDetails?.ratingsAndReviews)
        setAvgReviewCount(count)
    }, [courseDetails])

    useEffect(() => {
        const index = cart.findIndex((item) => item._id === courseId)
        if(index>=0){
            setCartFlag(true);
        }
    }, [courseId])

    const handleIsActive = (id) => {
        setIsActive(!isActive.includes(id) ? isActive.concat([id]) : isActive.filter((e) => e != id))
    }

    const handleBuyCourse = (course) => {
        if(token){
            const index = cart.findIndex((item) => item._id === courseId)
            if(index >= 0){
                navigate("/dashboard/cart")
            }
            else{
                dispatch(addToCart(course))
                navigate("/dashboard/cart")
            }
            return
        }
        setConfirmationModal({
            text1: "You are not logged in!!",
            text2: "Please login to Buy the course",
            bt1Text: "Login",
            btn2Txt: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null), 
        })
    }

    const handleAddToCart = (course) => {
        if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
            toast.error("You are an Instructor. You Can't buy a course.")
            return
        }
        if(token){
            dispatch(addToCart(course));
            setCartFlag(true)
            return
        }
        setConfirmationModal({
            text1: "You are not logged in!!",
            text2: "Please login to add to Cart",
            bt1Text: "Login",
            btn2Txt: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null), 
        })
    }

    if(loading){
        return (
            <div className="flex h-screen items-center justify-center">
              <div className="spinner"></div>
            </div>
        )
    }

    console.log(courseDetails);

    return (
        <div>
            <div className={`relative w-full bg-richblack-800`}>
                <div className="mx-auto box-content lg:w-[1260px] 2xl:relative ">
                    <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
                        <div className="relative block max-h-[30rem] lg:hidden">
                            <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                            <img
                                src={courseDetails?.thumbnail}
                                className="aspect-auto w-[400px] h-[400px] rounded-md"
                            />
                        </div>
                        <div className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}>
                            <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                                {courseDetails?.name}
                            </p>
                            <p className={`text-richblack-200`}>
                                {courseDetails?.description}
                            </p>
                            <div className="text-md flex flex-wrap items-center gap-2">
                                <span className="text-yellow-25">{avgReviewCount}</span>
                                <RatingStars Review_Count={avgReviewCount} Star_Size={24}/>
                                <span>{`(${courseDetails?.ratingsAndReviews.length} reviews)`}</span>
                                <span>{`${courseDetails?.studentsEnrolled?.length} members bought`}</span>
                            </div>
                            <p>
                                Created by {`${courseDetails?.instructor?.firstName} ${courseDetails?.instructor?.lastName}`}
                            </p>
                            <div className="flex flex-wrap gap-5 text-lg">
                                <p className="flex items-center gap-2">
                                    {" "}
                                    <BiInfoCircle/> Listed at {formatDate(courseDetails?.createdAt)}
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
                                <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                                    $ {courseDetails?.price}
                                </p>
                                <button className='cursor-pointer rounded-md bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900' onClick={()=>handleBuyCourse(courseDetails)}>
                                    Buy Now
                                </button>
                                <button className='cursor-pointer rounded-md bg-richblack-700 px-[20px] py-[8px] font-semibold text-richblack-5'
                                    onClick={cartFlag ? () => {
                                    dispatch(removeFromCart(courseDetails))
                                    setCartFlag(false)
                                    } : () => handleAddToCart(courseDetails)}
                                >
                                    {
                                        cartFlag ? "Remove From Cart" : "Add to Cart"
                                    }
                                </button>
                            </div>
                        </div>
                        {/* CoursesCard */}
                        <div className="right-[6rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
                            <CourseDetailsCard
                                course={courseDetails} setConfirmationModal={setConfirmationModal} handleBuyCourse={handleBuyCourse} cartFlag={cartFlag} setCartFlag={setCartFlag} handleAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
                <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">

                    {/* Author Details */}
                    <div className="mb-12 py-4">
                        <p className="text-[28px] font-semibold">Seller</p>
                        <div className="flex items-center gap-4 py-4">
                            <img
                                src={courseDetails?.instructor?.image ? courseDetails?.instructor?.image : `https://api.dicebear.com/5.x/initials/svg?seed=${courseDetails?.instructor?.firstName} ${courseDetails?.instructor?.lastName}`}
                                className="h-14 w-14 rounded-full object-cover"
                            />
                            <div className='flex flex-col'>
                                <p className="text-lg">{courseDetails?.instructor?.firstName} {courseDetails?.instructor?.lastName}</p>
                                <div className="text-richblack-50">
                                    {courseDetails?.instructor?.additionalDetails?.about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
        </div>
    )
}

export default CourseDetails
