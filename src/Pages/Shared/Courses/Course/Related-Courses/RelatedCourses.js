import React from 'react';
import Header from '../../../Header/Header';
import Course from '../Course';
import Rcourse from './Rcourse.js/Rcourse';

const RelatedCourses = () => {
    return (
        <div>
            <div className='courses-title'>
                <h1>Course Grid 1</h1>
            </div>
            <div className='all-course'>
                <Rcourse></Rcourse>
            </div>
        </div>
    );
};

export default RelatedCourses;