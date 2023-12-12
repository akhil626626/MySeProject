import { useParams } from 'react-router-dom';
import { getCategoryCourses } from '../../services/operations/categoriesAPIs';
import React, { useEffect, useState } from 'react'
import CoursesTables from './CoursesTables';
import { getCourse } from '../../services/operations/categoriesAPIs';

function Search() {

    const {categoryId, itemId} = useParams();
    const [courses, setCourses] = useState([]);

    console.log(itemId, categoryId);

    if(categoryId){
        console.log("akash");
    }

    const fetchCategoryCourses = async(itemId) => {
        let result;
        if(categoryId){
            console.log("akash")
            result = await getCategoryCourses(itemId);
            setCourses(result?.course)
        }
        else{
            console.log("Akash")
            result = await getCourse(itemId);
            setCourses([result]);
        }
        
    }

    useEffect(() => {
        fetchCategoryCourses(itemId);
    }, [categoryId, itemId])

    useEffect(() => {

    })

    return (
        courses == null ? ( (
            <div className="flex flex-1 justify-center items-center text-white text-3xl mt-7 mr-5">
                No Items Found
            </div>
          )) : <div>
            <CoursesTables courses={courses}/>
          </div>
    )
}

export default Search
