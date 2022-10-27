import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../../../../../Footer/Footer';
import Header from '../../../../../Header/Header';
import './CourseDetails.css';
import Enroll from './Enroll/Enroll';


const CourseDetails = () => {
    const CourseDetails = useLoaderData();
    const {name, id, image, details} = CourseDetails;
    return (
        <div>
            <Header></Header>
            <div className='courses-title'>
                <h1>Course Details</h1>
            </div>
            <div className="course-details">
                <div className="container">
                    <div className="course-details-content">
                        <div className="course-details-menu">
                            <NavLink className={({isActive}) => isActive ? "active":undefined} to={`/course-details/${id}/overview`}>OverView</NavLink>
                            <NavLink to={`/course-details/${id}/instructor`}>Instructor</NavLink>
                            <NavLink to={`/course-details/${id}/reviews`}>Reviews</NavLink>
                        </div>
                        <div className='course-details-content'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="enroll">
                        <Enroll></Enroll>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;