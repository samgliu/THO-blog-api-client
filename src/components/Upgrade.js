import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import apiClient from './http-common';

function Upgrade() {
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState({
        admin_password: '',
    });
    const { setUser, setIsLoggedIn, setIsAdmin } = useContext(GlobalContext);
    const navigate = useNavigate();
    function validator() {
        //console.log(state);
        if (state.admin_password === '') {
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
            await upgradePostData();
        } else {
            console.log(state);
        }
    }
    async function upgradePostData() {
        try {
            const params = `/upgrade-admin?admin_password=${state.admin_password}`;
            const res = await apiClient.put(params);
            if (res.status === 200) {
                setIsLoggedIn(true);
                setIsAdmin(true);
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
                <h3>Upgrade to Admin</h3>
                {errors !== null ? (
                    <div className="error">{errors}</div>
                ) : (
                    <div></div>
                )}

                <div className="form-group">
                    <label>Admin Password</label>
                    <input
                        type="password"
                        name="admin_password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" onClick={(e) => handleSubmitOnClick(e)}>
                    Upgrade
                </button>
            </form>
        </div>
    );
}

export default Upgrade;
