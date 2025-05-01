import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/'); 
                const lastSignInTime
                = result?.user?.metadata?.lastSignInTime;
                const loginfo = {email,lastSignInTime};
                fetch(`https://film-fusion-server.vercel.app/users`,{
                   method: 'PATCH',
                   headers: {
                    'content-type': 'application/json'
                   },
                   body:JSON.stringify(loginfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log('sign in info update in db',data)
                })
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <h2 className="text-3xl font-bold text-center pt-6">Login</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link to="/signUp" className="link text-blue-500">Register here</Link></p>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-outline btn-primary w-full">Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
