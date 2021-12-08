import Header from '../components/Header';
import Footer from '../components/Footer';
import Posts from '../components/Posts';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Home(props) {
    const {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        setIsAdmin,
        isAdmin,
        doesHttpOnlyCookieExist,
    } = useContext(GlobalContext);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('blogUser'));
        if (user !== null) {
            setIsLoggedIn(true);
            setUser(user);
            setIsAdmin(user.isAdmin);
        }
    }, [setUser, setIsLoggedIn]);
    return (
        <div>
            <Header />
            {isAdmin ? (
                <Link to="/create-post" className="link-new-post">
                    Create New Post
                </Link>
            ) : (
                <div></div>
            )}

            <Posts />
            <Footer />
        </div>
    );
}

export default Home;
