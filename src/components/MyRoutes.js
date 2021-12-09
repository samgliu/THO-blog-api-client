import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';
import NewPost from './NewPost';
import EditPost from './EditPost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Upgrade from './Upgrade';

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/upgrade" element={<Upgrade />} />
                <Route exact path="/create-post" element={<NewPost />} />
                <Route exact path="/:id/edit" element={<EditPost />} />
                <Route exact path="/:id" element={<PostDetail />} />
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
