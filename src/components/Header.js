import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import apiClient from './http-common';

function Header() {
    const {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        doesHttpOnlyCookieExist,
    } = useContext(GlobalContext);
    const navigate = useNavigate();

    async function handleLogOut(e) {
        e.preventDefault();
        setUser(null);
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem('blogUser');
        await apiClient.get('/logout');
    }

    return (
        <header>
            <Link to="/">
                <h1>My Personal Blog</h1>
            </Link>
            {isLoggedIn && user !== null ? (
                <ul>
                    <li>
                        Welcome back {user.Firstname} {user.Lastname}
                    </li>
                    {isAdmin ? (
                        <li>Admin</li>
                    ) : (
                        <li>
                            <Link to="/upgrade">
                                <p>Upgrade</p>
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link to="/" onClick={handleLogOut}>
                            <p>Sign Out</p>
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/signup">
                            <p>Sign Up</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">
                            <p>Sign In</p>
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;
