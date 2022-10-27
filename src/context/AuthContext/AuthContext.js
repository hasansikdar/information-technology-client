import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebaseConfig';

const auth = getAuth(app);
export const Authcontext = createContext();
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInProvider = (provider) => {
        return signInWithPopup(auth, provider);
    } 
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return() => {
            unsubscribe();
        }
    },[])


    const authInfo = {user, createUser, signIn, signInProvider, logout}
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthContext;