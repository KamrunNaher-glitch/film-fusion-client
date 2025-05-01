import React, { useContext, useState } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters, include an uppercase and a lowercase letter.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log('User created at FB', result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = {name,email,createdAt}
                fetch('https://film-fusion-server.vercel.app/users',{
                  method:'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(newUser )
                })
                .then(res =>res.json())
                .then(data => {
                 
                  if(data.insertedId){
                    console.log('users created in db')
                  }
                })


                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <h2 className="text-3xl font-bold text-center pt-6">Register</h2>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Enter your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Already have an account? <Link to="/signIn" className="link text-blue-500">Login here</Link></p>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-outline btn-primary w-full">Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
