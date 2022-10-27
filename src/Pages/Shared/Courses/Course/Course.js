import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';


const Course = ({course}) => {
    // const course = useLoaderData();
    // const {name, id, image, details} = course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={course?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{course?.name}</h2>
                    <p>{course?.details?.length > 100 ? course?.details.slice(0, 90):course?.details}</p>
                    <div className="card-actions">
                        <Link to={`/course-details/${course.id}`} className="btn btn-primary">Enroll</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;