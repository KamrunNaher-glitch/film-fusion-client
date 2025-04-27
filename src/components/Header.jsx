import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../components/Providers/AuthProvider'; // Make sure your AuthProvider path is correct!

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log('User logged out successfully');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addMovie">Add Movie</NavLink></li>
            
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/featuredMovies">Featured Movies</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-black text-white px-4 md:px-8 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Movie Portal</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer border"
                            />
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {user.displayName}
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-error">Logout</button>
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <Link to="/signIn" className="btn btn-primary text-sm md:text-base">Sign In</Link>
                        <Link to="/signUp" className="btn btn-secondary text-sm md:text-base">Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

