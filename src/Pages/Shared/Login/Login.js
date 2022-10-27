import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Authcontext } from '../../../context/AuthContext/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { user, signIn, signInProvider } = useContext(Authcontext);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
            })
    }

    const handleSingIn = (provider) => {
        signInProvider(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">If you have an account please Login Now!!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Login</button>
                        </div>

                    </form>
                    <div className='card-body'>
                        <button onClick={() => handleSingIn(googleProvider)} className="btn btn-secondary"><FaGoogle style={{ marginRight: '10px' }}></FaGoogle>Google</button>
                        <button onClick={() => handleSingIn(GithubProvider)} className="btn btn-accent mt-3"><FaGithub style={{ marginRight: '10px' }}></FaGithub>GitHub</button>
                        <p>If you have no account please <Link className='link text-blue-600' to='/register'>Create an Account!!!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;