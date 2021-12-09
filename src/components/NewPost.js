import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import apiClient from './http-common';

function NewPost() {
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState({
        topic: '',
        content: '',
    });
    const { setUser, setIsLoggedIn, setIsAdmin } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('blogUser'));
        if (user !== null) {
            setIsLoggedIn(true);
            setUser(user);
            setIsAdmin(user.isAdmin);
        }
    }, [setUser, setIsLoggedIn]);
    function validator() {
        //console.log(state);
        if (state.topic === '' || state.content === '') {
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
            await newPostPostData();
        } else {
            console.log(state);
        }
    }
    async function newPostPostData() {
        try {
            const params = `/create-post`;
            const res = await apiClient.post(params, JSON.stringify(state));
            if (res.status === 200) {
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
                <h3>New Post</h3>
                {errors !== null ? (
                    <div className="error">{errors}</div>
                ) : (
                    <div></div>
                )}

                <div className="form-group">
                    <label>Topic</label>
                    <input
                        type="text"
                        placeholder="Topic"
                        name="topic"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        type="text"
                        name="content"
                        rows="10"
                        placeholder="Enter content"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" onClick={(e) => handleSubmitOnClick(e)}>
                    Post
                </button>
            </form>
        </div>
    );
}

export default NewPost;
