import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='main-section'>
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className="left-menu">
                        <p>Left menu</p>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>&copy; Copyright Mohammad Hasan | All right Reserved</p>
            </div>
        </div>
    );
};

export default Main;