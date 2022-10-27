import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import TopBanner from '../Pages/Shared/Top-banner/TopBanner';

const Main = () => {
    return (
        <div className='main-section'>
            <Header></Header>
            
            <div className="main">
                <div className="container">
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;