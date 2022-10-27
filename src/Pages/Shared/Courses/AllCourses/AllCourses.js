import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div className='default-course'>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default AllCourses;