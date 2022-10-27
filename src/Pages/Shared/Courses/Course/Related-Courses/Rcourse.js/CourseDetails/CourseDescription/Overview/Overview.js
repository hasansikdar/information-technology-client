import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Overview.css';

const Overview = () => {
    const overviewdata = useLoaderData();
    const {name, image, id, details} = overviewdata;
    console.log(overviewdata);
    return (
        <div className='overview'>
            <h3>Course Description</h3>
            <h3>{name}</h3>
            <p>{details}</p>
            <img src={image} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default Overview;