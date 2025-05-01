import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../components/Providers/AuthProvider';

const Header = () => {
    const { user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('User logged out'))
            .catch(error => console.error(error));
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink></li>
            <li><NavLink to="/addMovie">Add Movie</NavLink></li>
            <li><NavLink to="/FeatuedMovies">Featured Movies</NavLink></li>
            <li><NavLink to="/FavoriteMovie">Favorite Movies</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-black text-white px-4 md:px-8 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Movie Portal</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-2">
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full border cursor-pointer"
                            />
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded hidden group-hover:block">
                                {user.displayName}
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-error btn-sm">Logout</button>
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <Link to="/signIn" className="btn btn-primary btn-sm">Login</Link>
                        <Link to="/signUp" className="btn btn-secondary btn-sm">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
