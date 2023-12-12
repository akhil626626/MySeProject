import React from 'react'
import HighlightText from '../Components/core/Dashboard/HomePage/HighlightText'
import BannerImage11 from "../assets/Images/aboutus11.webp"
import BannerImage1 from "../assets/Images/aboutus1.avif"
import BannerImage2 from "../assets/Images/aboutus22.webp"
import BannerImage3 from "../assets/Images/aboutus33.jpg"
import Quote from '../Components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponenet from '../Components/core/AboutPage/StatsComponent'
import Footer from '../Components/Common/Footer'
import LearningGrid from '../Components/core/AboutPage/LearningGrid'
import ContactFormSection from '../Components/core/AboutPage/ContactFormSection'
import ReviewSlider from '../Components/Common/ReviewSlider'

const Aboutus = () => {
  return (
    <div>
        {/* Section - 1 */}
        <section className="bg-richblack-700">

            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">

                <div className="mx-auto py-20 text-3xl font-semibold lg:w-[80%]">
                    Your Ultimate Destination for Buying and Selling Auto Parts Online <br/>
                    <HighlightText text={"Drive the Future of Auto Commerce!"}/>

                    <div className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                    "Gear up for a seamless journey in the world of auto parts commerce with Clarkton. We're not just a platform; we're the fuel for your automotive aspirations. 
                    Shift into a new era of convenience, where buying and selling auto parts meets innovation. Drive your passion forward with Clarkton – Ignite Your Auto Dreams!"
                    </div>
                </div>

                <div className="sm:h-[70px] lg:h-[150px]"></div>

                <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                    <img src={BannerImage11}/>
                    <img src={BannerImage2}/>
                    <img src={BannerImage3}/>
                </div>
            
            </div>

        </section>

        {/* Section-2 */}
        <section className="border-b border-richblack-700">

            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="h-[100px] "></div>
            <Quote/>
            </div>

        </section>

        {/* section-3 */}
        <section className='mx-auto flex w-11/12 max-w-maxContent justify-between gap-12 text-richblack-500 mt-12'>

            <div className='flex flex-col w-[55%] gap-10'>
                <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                    Our Founding Story 
                </div>
                
                <div className='flex flex-col gap-5 text-base font-medium text-richblack-300 lg:w-[95%]'>
                    <p>Clarkton was born out of a shared enthusiasm for automobiles and a vision to reshape the landscape of buying and selling auto parts. The founders, united by their passion for innovation and a commitment to enhancing the automotive experience, embarked on a journey to create a platform that would redefine the industry. Frustrated by the limitations of traditional methods, they sought to revolutionize the auto parts marketplace by infusing it with cutting-edge technology, expert insights, and a sense of community. The result was Clarkton – 
                    a dynamic hub where automotive enthusiasts, sellers, and buyers converge, driving the industry forward into a new era of accessibility and efficiency.</p>

                </div>

            </div>

            <div className='w-[45%]'>
                <img src={BannerImage1} className="shadow-[0_0_20px_0] shadow-[#FC6767]"/>
            </div>

        </section>

        {/* section-4 */}
        <section className='mx-auto flex w-11/12 max-w-maxContent justify-between gap-10 text-richblack-500 mt-34'>

            <div className="my-24 flex lg:w-[45%] flex-col gap-6">

                <div className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                    Our Vision
                </div>

                <div className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Clarkton envisions revolutionizing the auto parts marketplace by creating a dynamic platform that emphasizes accessibility, efficiency, and community. We aim to empower automotive enthusiasts, sellers, and buyers, fostering a shared passion for innovation. Our commitment extends beyond transactions, seeking to build a vibrant community that propels the automotive industry into a future marked by collaboration, 
                cutting-edge technology, and unparalleled customer satisfaction.
                </div>

            </div>

            <div className="my-24 flex lg:w-[45%] flex-col gap-6">

                <div className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                    Our Mission
                </div>

                <div className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Clarkton's mission is to redefine the auto parts marketplace through a seamless, tech-driven platform, connecting enthusiasts with quality sellers. We strive to simplify the buying and selling process, ensuring accessibility, transparency, and trust. Committed to customer satisfaction, our aim is to streamline the auto parts journey, providing a one-stop destination for discovery, purchase, and sale. Beyond transactions, we foster a supportive community that shares knowledge and a collective love for automobiles, ultimately transforming the automotive ecosystem into a more efficient,
                 accessible, and enjoyable experience for all.
                </div>

            </div>

        </section>
        
        {/* section-5 */}
        <StatsComponenet/>

        {/* section-6 */}
        <section className='mt-20 w-11/12 mx-auto max-w-maxContent bg-richblack-900 text-white flex flex-col items-center justify-between gap-8 mb-[140px]'>
            <LearningGrid/>
            <ContactFormSection/>
        </section>

        <div className='flex flex-col items-center justify-center'>
            <h2 className="text-center text-4xl font-semibold mb-2 text-richblack-5">Reviews from Other Learners</h2>

            <ReviewSlider/>
        </div>

        <Footer/>
    </div>
  )
}

export default Aboutus
