import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

function SignIn() {
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState({
        username: '',
        password: '',
    });
    const {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        doesHttpOnlyCookieExist,
    } = useContext(GlobalContext);
    const navigate = useNavigate();
    function validator() {
        //console.log(state);
        if (state.username === '' || state.password === '') {
            setErrors('Some field is empty!');
        } else {
            setErrors(null);
            return true;
        }
    }
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    async function handleSubmitOnClick(e) {
        e.preventDefault();
        if (validator()) {
            await signInPostData();
        } else {
            console.log(state);
        }
    }
    async function signInPostData() {
        try {
            const params = `/signin?username=${state.username}&password=${state.password}`;
            const res = await axios.post(
                params,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                { withCredentials: true }
            );
            if (res.status === 200) {
                setIsLoggedIn(true);
                setUser(res.data);
                localStorage.setItem('blogUser', JSON.stringify(res.data));
                navigate('/');
            }
        } catch (err) {
            //setPosts(fortmatResponse(err.response?.data || err));
        }
    }
    return (
        <div>
            <Header />
            <form className="sign-up-form-container">
                <h3>Sign In</h3>
                {errors !== null ? (
                    <div className="error">{errors}</div>
                ) : (
                    <div></div>
                )}

                <div className="form-group">
                    <label>User name</label>
                    <input
                        type="text"
                        placeholder="User name"
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" onClick={(e) => handleSubmitOnClick(e)}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
