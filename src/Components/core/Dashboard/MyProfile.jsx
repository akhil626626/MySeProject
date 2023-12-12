import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../Common/IconBtn';
import { BiEdit } from "react-icons/bi";
import { useState } from 'react';
import { setLoading } from '../../../slices/authSlice';

const MyProfile = () => {

    const {user} = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                My Profile
            </h1>


            {/* Section-1 */}
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

                <div className="flex items-center gap-x-4">
                    <img src={user.image} alt={`profile-${user.firstName}`} className='aspect-square w-[78px] rounded-full object-cover'/>

                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-richblack-5">{user?.firstName + " " + user?.lastName}</p>
                        <p className="text-sm text-richblack-300">{user?.emailID}</p>
                    </div>
                </div>

                <div>
                    <IconBtn
                        text="Edit"
                        onclick={()=>{
                            navigate("/dashboard/settings")
                        }}
                    >
                        <BiEdit/>
                    </IconBtn>
                </div>

            </div>
            
            {/* Section-2 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">About</p>
                    <div>
                        <IconBtn
                            text="Edit"
                            onclick={()=>{
                                navigate("/dashboard/settings")
                            }}
                        >
                            <BiEdit/>
                        </IconBtn>
                    </div>
                </div>
                <p className={`${user?.additionalDetails?.about ? "text-richblack-5" : "text-richblack-400"} text-sm font-medium`}>
                    {
                        user?.additionalDetails?.about ? user?.additionalDetails?.about : "Write something about yourself"
                    }
                </p>
            </div>

            {/* section-3 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">
                        Personal Details
                    </p>
                    <div>
                        <IconBtn
                            text="Edit"
                            onclick={()=>{
                                navigate("/dashboard/settings")
                            }}
                        >
                            <BiEdit/>
                        </IconBtn>
                    </div>
                </div>

                <div className="grid grid-cols-2 max-w-[500px] gap-x-[200px] gap-y-8">
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">First Name</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Last Name</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.lastName}</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Email</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.emailID}</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.contactNumber == "" ? "Add Contact Number" : user?.additionalDetails?.contactNumber}</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Gender</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.gender == "" ? "Add Gender" : user?.additionalDetails?.gender}</p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Date Of Birth</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.dateOfBirth == "" ? "Add Date Of Birth" : user?.additionalDetails?.dateOfBirth}</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default MyProfile
