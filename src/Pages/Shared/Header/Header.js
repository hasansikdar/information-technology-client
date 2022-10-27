import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaLightbulb } from "react-icons/fa";
import { Authcontext } from '../../../context/AuthContext/AuthContext';

const Header = () => {
    const {user, logout} = useContext(Authcontext);
    const [darkmood, setDarkmood] = useState(false);
    
    const handleLight =()=> {
        const light = document.getElementsByTagName('body');
        console.log(light)
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img className='logo' src="https://www.rexburg.org/sites/default/files/styles/gallery500/public/imageattachments/info-tech/page/1061/it_logo_2018.jpg?itok=V2IxZjn8" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Information Technology</Link>
            </div>
            <div className="flex-none">
            <button onClick={handleLight} className='theme'>
                 <FaMoon></FaMoon>
            </button>
            <button>
                <FaLightbulb></FaLightbulb>
            </button>
            <Link className='mx-2' to='/home'>Home </Link>
            <Link to="/faq">FAQ</Link>
            {user?.uid ?<>
                <button onClick={logout} className='mx-2'>Logout </button>
            </>
            :
            <>
                <Link className='mx-2' to='/login'>Login </Link>
                <Link className='mx-2' to='/register'>Register </Link>
            </>}
            <Link to="/courses">Courses</Link>
            <Link className='mx-2' to='/blog'>Blog </Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;