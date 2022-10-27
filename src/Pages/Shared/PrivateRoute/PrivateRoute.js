import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(Authcontext);
    let location = useLocation();
    if(user?.uid){
        return children;
    }else{
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;