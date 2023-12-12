import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { formatDate } from '../../services/formatDate';
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const CoursesTables = ({courses}) => {

    const navigate = useNavigate();
    const TRUNCATE_LENGTH = 30
    const COURSE_STATUS = {
        DRAFT: "Draft",
        PUBLISHED: "Published",
    }
    
    return (
        <>
            <Table className="rounded-xl border border-richblack-800 ">
                <Thead>
                    <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2 items-center justify-center">
                        <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
                            Items
                        </Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100 mr-2">
                            PRICE
                        </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        courses.length === 0 ? (
                            <Tr>
                                <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                                    No items found
                                    {/* TODO: Need to change this state */}
                                </Td>
                            </Tr>
                        ) : (
                            courses.map((course) => {
                                return (
                                    <div className="cursor-pointer" onClick={()=>navigate(`/courses/${course._id}`)}>
                                        <Tr key={course._id} className="flex gap-x-10 border-b border-richblack-800 px-6 py-8 justify-between">
                                            <Td className="flex flex-1 gap-x-4">
                                                <img 
                                                    src={course.thumbnail}
                                                    className="h-[148px] w-[220px] rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col justify-between">
                                                    <div className="text-lg font-semibold text-richblack-5">
                                                        {course.name}
                                                    </div>
                                                    <div className="text-xs text-richblack-300">
                                                        {
                                                            course.description.split(" ").length > TRUNCATE_LENGTH ? 
                                                            course.description.split(" ").slice(0, TRUNCATE_LENGTH).join(" ") + "..."
                                                            : course.description
                                                        }
                                                    </div>
                                                    <div className="text-[12px] text-richblack-25">
                                                        Created: {formatDate(course.createdAt)}
                                                    </div>
                                                    {
                                                        course.status == COURSE_STATUS.DRAFT ? (
                                                            <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                                                                <HiClock size={14}/>
                                                                Drafted
                                                            </div>
                                                        ) : (
                                                            <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                                                            <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                                                                <FaCheck size={8} />
                                                            </div>
                                                                Published
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </Td>

                                            <Td className="text-sm font-medium text-richblack-100 flex items-center justify-center">
                                                ${course.price}
                                            </Td>

                                        </Tr>
                                    </div>
                                )
                            })
                        )
                    }
                </Tbody>
            </Table>
        </>
    )
}

export default CoursesTables
