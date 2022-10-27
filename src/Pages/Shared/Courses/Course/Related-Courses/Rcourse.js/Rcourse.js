import React from 'react';
import { Link } from 'react-router-dom';

const Rcourse = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2>$40</h2>
                <h2 className="card-title">Shoes!</h2>
                <p>Learning to Write as a Professional Author</p>
                <div className="card-actions justify-end">
                    <Link to='/course-details' className="btn btn-primary">Course Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Rcourse;