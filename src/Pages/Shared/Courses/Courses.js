import React from 'react';
import { Link, Navigate, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Course from './Course/Course';
import './Courses.css';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='courses'>
            <Header></Header>
            <div className="courses-header">
                <h3>START LEARNING CODING LANGUAGES</h3>
                <h1>Build Your Dream TODAY</h1>
            </div>
            <div className="courses-container">
                <div className='courseCategory'>
                    {
                        courses.map(course => <p key={course.id}>
                            <Link to={`/courses/${course.id}`}>{course.name}</Link>
                        </p>)
                    }
                </div>
                <div className='all-course'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;