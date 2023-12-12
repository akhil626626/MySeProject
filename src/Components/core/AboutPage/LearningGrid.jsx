import React from 'react'
import HighlightText from '../Dashboard/HomePage/HighlightText';
import Button from '../Dashboard/HomePage/Button';


const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Auto Parts Commerce",
      highliteText: "Anyone, Anywhere",
      description:
        "Clarkton collaborates with over 275+ top-tier suppliers and automotive companies to deliver flexible, cost-effective, industry-relevant online access to auto parts for individuals and organizations globally.",
      BtnText: "Learn More",
      BtnLink: "/login",
    },
    {
      order: 1,
      heading: "Industry-Tailored Inventory",
      description:
        "Save time and money! The Clarkton is designed for simplicity and aligned with the demands of the automotive industry.",
    },
    {
      order: 2,
      heading: "Our Commerce Approach",
      description:
        "Clarkton collaborates with over 275+ premier automotive suppliers and companies to provide",
    },
    {
      order: 3,
      heading: "Validation",
      description:
        "Clarkton collaborates with 275+ premier industry partners to offer",
    },
    {
      order: 4,
      heading: `Automated Assessment`,
      description:
        "Clarkton collaborates with over 275 top-tier suppliers and industry leaders to deliver",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Clarkton collaborates with 275+ esteemed industry leaders to provide",
    },
];


const LearningGrid = () => {
  return (
    <div className='grid grid-cols-4 mx-auto w-[fit] mb-12'>
        {
            LearningGridArray.map((element, index) => {
                return (
                    <div key={index}
                    className={`${index == 0 && "xl:col-span-2 xl:h-[294px]"} ${element.order % 2 == 1 ? "bg-richblack-700 h-[294px]" : element.order % 2 === 0 ? "bg-richblack-800 h-[294px]" :
                    "bg-transparent"} ${element.order === 3 && "xl:col-start-2"}`}
                    >
                        {
                            element.order < 0 ? (
                                <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">

                                    <div className="text-3xl font-semibold ">
                                        {element.heading}
                                        <br/>
                                        <HighlightText text={element.highliteText}/>
                                    </div>

                                    <div className="text-richblack-300 font-medium">
                                        {element.description}
                                    </div>
                                    
                                    <div className="w-fit mt-2">
                                        <Button linkto={element.BtnLink} color={"yellow"}>
                                            Learn More
                                        </Button>
                                    </div>
                                    

                                </div>
                            ) : (
                                <div className="p-8 flex flex-col gap-8">
                                    <div className="text-richblack-5 text-lg">
                                        {element.heading}
                                    </div>

                                    <div className="text-richblack-300 font-medium">
                                        {element.description}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default LearningGrid
