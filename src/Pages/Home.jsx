import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

import HighlightText from '../Components/core/Dashboard/HomePage/HighlightText';
import Button from '../Components/core/Dashboard/HomePage/Button';
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../Components/core/Dashboard/HomePage/CodeBlocks';
import Footer from "../Components/Common/Footer";
import LearningLanguageSection from '../Components/core/Dashboard/HomePage/LearningLanguageSection';
import TimeLineSection from '../Components/core/Dashboard/HomePage/TimeLineSection';
import InstructorSection from '../Components/core/Dashboard/HomePage/InstructorSection';
import ExploreMore from '../Components/core/Dashboard/HomePage/ExploreMore';
import ReviewSlider from '../Components/Common/ReviewSlider';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountType, setTab, setToken } from '../slices/authSlice';
import { setUser } from '../slices/profileSlice';

const Home = () => {

    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);
    const user = useSelector((state) => state.profile);
    const navigate = useNavigate();

    const type = user.user && user.user.accountType;

    const handleButton = () => {
        dispatch(setTab(""))
        if(token && type === "Instructor"){
            navigate("/dashboard/my-profile")
        }
        else if(!token){
            dispatch(setAccountType("Instructor"))
            navigate("/signup")
        }
        else{
            navigate("/signup")
            dispatch(setToken(null))
            dispatch(setUser(null))
            dispatch(setAccountType("Instructor"))
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }

    return (
        <div>
        
            {/* Section-1 */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
        text-white justify-between'>

                {/* become an instructor button */}
                <div>

                    <div className='group mt-16 p-1 mx-auto bg-richblack-800 rounded-full transition-all duration-200 hover:scale-95 w-fit shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] hover:shadow-none'>
                    
                        <div className='flex items-center gap-[10px] py-[5px] cursor-pointer px-10 group-hover:bg-richblack-900 transition-all duration-200 rounded-full' onClick={handleButton}>
                            <p className='text-richblack-200'>Become a member</p>
                            <FaArrowRight className='w-[12px] h-[12px] text-richblack-200'/>
                        </div>

                    </div>

                </div>

                {/* Description Section */}
                <div className='flex flex-col font-inter gap-4 mt-10 w-[913px]'>
                    
                    <div className='font-semibold text-[36px] leading-2.75rem text-center'>
                        <p> Elevate Your Automotive Journey with <HighlightText text={"Clarkton"}/> </p>
                    </div>

                    <div>
                        <p className='text-center text-[16px] leading-6 font-medium text-richblack-300'> With Clarkton's online auto parts platform, you can sell and list at your own pace, from anywhere in the world. Gain access to a wealth of resources, including easy listing tools, comprehensive product details, and personalized support from our automotive experts. Empower your auto parts business and enhance your selling experience with our flexible and user-friendly platform.  </p>
                    </div>

                    <div className='flex mx-auto gap-[24px] mt-10'>

                        <Button color={"yellow"} linkto={token ? "/dashboard/my-profile" : "/signup"}>
                            Learn More
                        </Button>
                        
                        <Button color={"black"} linkto={token ? "/dashboard/my-profile" : "/login"}>
                            Book a Demo
                        </Button>

                    </div>

                </div>

                {/* code section-1 */}
                <div>

                    <CodeBlocks position={"lg:flex-row"} 
                        heading={
                            <div>
                                Unlock your auto parts <HighlightText text={"expertise with our online platform"}/>
                            </div>
                        }
                        subheading={"At Clarkton, we provide a dynamic learning experience tailored for automotive enthusiasts. Explore our comprehensive courses, designed to unlock your knowledge and elevate your proficiency in the world of auto parts."}
                        btn1={
                            {
                                text: "Try it Yourself",
                                color: "yellow",
                                linkto: `${token ? "/dashboard/my-profile" : "/signup"}`
                            }
                        }
                        btn2={
                            {
                                text: "Learn More",
                                color: "black",
                                linkto: `${token ? "/dashboard/my-profile" : "/login"}`,
                            }
                        }
                        codeblock={`Auto Parts Retail\n Free Battery Testing\nLoan-A-Tool Program\nOil and Fluid Recycling\nDiagnostic Code Retrieval\nWiper Blade Installation\nHeadlight Bulb Installation\nLoaner Tools\nFluid Recommendations\nOil Recommendations\nBrake Testing and Inspection`}
                        codeColor={"text-yellow-25"}
                        gradient={<div className='absolute codeBlock-1'></div>}
                    />

                </div>

                <div>

                    <CodeBlocks position={"lg:flex-row-reverse"} 
                        heading={
                            <div>
                                Start <HighlightText text={"finding your parts in"}/> <br/> <HighlightText text={"seconds"}/>
                            </div>
                        }
                        subheading={"Start exploring the world of auto parts in seconds with Clarkton's user-friendly platform."}
                        btn1={
                            {
                                text: "Continue Lesson",
                                color: "yellow",
                                linkto: `${token ? "/dashboard/my-profile" : "/login"}`
                            }
                        }
                        btn2={
                            {
                                text: "Learn More",
                                color: "black",
                                linkto: `${token ? "/dashboard/my-profile" : "/signup"}`,
                            }
                        }
                        codeblock={`Auto Parts Retail\n Free Battery Testing\nLoan-A-Tool Program\nOil and Fluid Recycling\nDiagnostic Code Retrieval\nWiper Blade Installation\nHeadlight Bulb Installation\nLoaner Tools\nFluid Recommendations\nOil Recommendations\nBrake Testing and Inspection`}
                        codeColor={"text-white"}
                        gradient={<div className='absolute codeBlock-2'></div>}
                    />

                </div>


            </div>

            {/* Section-2 */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                
                <div className='homepage_bg h-[310px] -mt-3'>
                    <div className='w-11/12 max-2-maxContent flex items-center gap-5 mx-auto justify-center'>
                        <div className='h-[450px]'></div>
                        <div className='flex gap-7 text-white -mt-[150px]'>
                            <Button linkto={`${token ? "/dashboard/my-profile" : "/login"}`} color={"yellow"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </Button>

                            <Button linkto={`${token ? "/dashboard/my-profile" : "/login"}`} color={"black"}>
                                Learn More
                            </Button>
                            
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center bg-pure-greys-5 gap-8'>
                    
                    <div className='mb-10 flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
                        
                        <div className='text-richblack-900 font-inter font-semibold text-4xl leading-[44px] tracking-tighter w-[40%] -mt-[100px] '>
                            Get the Parts you need for your <span><HighlightText text={"car that is in demand."}/></span>
                        </div>

                        <div className='flex flex-col items-start gap-10 lg:w-[40%] -mt-[100px] '>
                            <p className='font-inter font-800 text-[16px] leading-[24px]'>
                            At Clarkton, we redefine the modern auto parts commerce landscape, setting our own standards. In today's dynamic market, being a competitive specialist demands more than just professional skills. Join us and elevate your expertise in the automotive industry.
                            </p>
                            <Button color={"yellow"} linkto={`${token ? "/dashboard/my-profile" : "/login"}`}>
                                Learn More
                            </Button>
                        </div>

                    </div>

                </div>

                <TimeLineSection/>

            </div>

            {/* Section-3 */}
            <div className='w-11/12 max-w-maxContent mx-auto items-center justify-betweem gap-8 bg-richblack-900 text-white'>

                {/* section-2 */}
                <h2 className="text-center text-4xl font-semibold mb-2 text-richblack-5 mt-[100px]">Reviews from Other Members</h2>

                <ReviewSlider/>
            </div>

            {/* Section-4 */}
            <div>
                <Footer/>
            </div>

        </div>
  )
}

export default Home

