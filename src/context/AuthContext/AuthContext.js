import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebaseConfig';

const auth = getAuth(app);
export const Authcontext = createContext();
const AuthContext = ({children}) => {
    const [user, setUser] = useState({name: "hasan"})


    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = {user, createUser, signIn, signInProvider}
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthContext;