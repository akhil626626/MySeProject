import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import copy from "copy-to-clipboard"
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../../slices/cartSlice'

const CourseDetailsCard = ({course, handleAddToCart, handleBuyCourse, cartFlag, setCartFlag}) => {
    const {user} = useSelector((state) => state.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleShare = () => {
        copy(window.location.href)
        toast.success("Link copied to clipboard")
    }
    
    console.log(course);

    return (
        <div>
            <div className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}>
                <img
                    src={course?.thumbnail}
                    className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
                />
                <div className='px-4'>
                    <div className="space-x-3 pb-4 text-3xl font-semibold">
                        USD/$ {course?.price}
                    </div>
                    <div className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}>
                        <button
                            className='cursor-pointer rounded-md bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900'
                            onClick={
                                user && course?.studentsEnrolled.includes(user?._id) ? () => navigate("/dashboard/enrolled-courses") : () => handleBuyCourse(course)
                            }
                        >
                            {
                                user && course?.studentsEnrolled.includes(user._id) ? "Go To Item" : "Buy Now"
                            }
                        </button>

                        {
                            (!user || !course?.studentsEnrolled.includes(user?._id)) && 
                            <button
                                className='cursor-pointer rounded-md bg-richblack-800 px-[20px] py-[8px] font-semibold text-richblack-5'
                                onClick={cartFlag ? () => {
                                    dispatch(removeFromCart(course))
                                    setCartFlag(false)
                                } : () => handleAddToCart(course)}
                            >
                                {
                                    cartFlag ? "Remove From Cart" : "Add to Cart"
                                }
                            </button>
                        }
                    </div>

                    <div className='text-center'>
                        <button
                            className="mx-auto flex items-center gap-2 py-3 text-yellow-100 "
                            onClick={handleShare}
                        >
                            <FaShareSquare size={15}/> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsCard
