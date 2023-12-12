import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import RenderSteps from './RenderSteps';

const AddCourse = () => {
  return (
    <div className="flex w-[80%] items-center mx-auto gap-x-6">
      <div className='flex flex-col flex-1'>
        <Link to="/dashboard/my-profile" className='text-richblack-300 flex gap-2'>
            <IoIosArrowBack className='mt-1'/>
            Back to Dashboard
        </Link>
        <div className="flex-1 mt-10">
            <RenderSteps/>
        </div>
      </div>
    </div>
  )
}

export default AddCourse
