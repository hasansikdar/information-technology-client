import React from 'react';
import { FaStar } from "react-icons/fa";
const Reviews = () => {
    return (
        <div>
            <div className="average-rating">
                <h1>4.50</h1>
                <div className="rating">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar> 
                </div>
                4 rating
            </div>
        </div>
    );
};

export default Reviews;