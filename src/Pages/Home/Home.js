import React from 'react';
import Course from '../Shared/Courses/Course/Course';
import Courses from '../Shared/Courses/Courses';
import Header from '../Shared/Header/Header';
import TopBanner from '../Shared/Top-banner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Course></Course>
        </div>
    );
};

export default Home;