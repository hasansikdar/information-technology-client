import React from 'react';
import './TopBanner.css';


const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div className="container">
                <div className="top-banner-content">
                    <h1>Complete Your Dreams in Java Programming</h1>
                    <p>Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                    <button className='btn btn-primary mt-5'>Download Free E-book</button>
                </div>
                <div className="top-banner-img">
                    <img src="https://maxcoach.vuejstemplate.com/images/intro/intro5/home-5-hero-image.png" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;