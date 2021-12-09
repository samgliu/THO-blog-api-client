import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import apiClient from './http-common';
import { useParams } from 'react-router-dom';

function EditPost() {
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState({
        topic: '',
        content: '',
    });
    const { setUser, setIsLoggedIn, setIsAdmin } = useContext(GlobalContext);
    const navigate = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('blogUser'));
        if (user !== null) {
            setIsLoggedIn(true);
            setUser(user);
            setIsAdmin(user.isAdmin);
        }
        async function fetchPostDataFromServer() {
            try {
                const params = `/${id}`;
                const res = await apiClient.get(params);
                if (res.status === 200) {
                    let topic = res.data.Topic;
                    let content = res.data.Content;
                    setState({
                        topic: topic,
                        content: content,
                    });
                }
            } catch (err) {
                //setPosts(fortmatResponse(err.response?.data || err));
            }
        }
        fetchPostDataFromServer();
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
            await editPostPostData();
        } else {
            console.log(state);
        }
    }
    async function editPostPostData() {
        try {
            const params = `/${id}?topic=${state.topic}&content=${state.content}`;
            const res = await apiClient.put(params);
            if (res.status === 200) {
                navigate(`/${id}`);
            }
        } catch (err) {
            //setPosts(fortmatResponse(err.response?.data || err));
        }
    }
    return (
        <div>
            <Header />
            <form className="sign-up-form-container">
                <h3>Editing Post</h3>
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
                        defaultValue={`${state.topic}`}
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
                        defaultValue={`${state.content}`}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" onClick={(e) => handleSubmitOnClick(e)}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditPost;
