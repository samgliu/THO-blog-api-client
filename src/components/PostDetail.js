import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Comments from '../components/Comments';
import NewComment from '../components/NewComment';
import { useParams } from 'react-router-dom';
import apiClient from './http-common';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function PostDetail(props) {
    const id = useParams().id;
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        doesHttpOnlyCookieExist,
    } = useContext(GlobalContext);
    /*
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };
    */
    useEffect(() => {
        async function getPostsData() {
            try {
                const res = await apiClient.get(`/${id}`);
                const result = {
                    status: res.status + '-' + res.statusText,
                    headers: res.headers,
                    data: res.data,
                };
                //console.log(res);
                setPost(result.data);
                setComments(result.data.Comments);
            } catch (err) {
                //setPosts(fortmatResponse(err.response?.data || err));
            }
        }
        getPostsData();
        const user = JSON.parse(localStorage.getItem('blogUser'));
        if (user !== null) {
            setIsLoggedIn(true);
            setUser(user);
            setIsAdmin(user.isAdmin);
        }
    }, [id, setPost, setComments, setUser, setIsLoggedIn, setIsAdmin]); // dependency

    async function postCommentData(name, content) {
        try {
            const res = await apiClient.post(
                `/${id}/comment-create?name=${name}&content=${content}`
            );
            let newComments = [
                ...comments,
                {
                    Name: name,
                    Content: content,
                    Timestamp: new Date().toString(),
                    _id: res.data._id,
                },
            ];
            setComments(newComments);
        } catch (err) {
            //setPosts(fortmatResponse(err.response?.data || err));
        }
    }

    function deleteCommentLocal(cid) {
        const newComments = comments.filter((cmt) => cmt._id !== cid);
        setComments(newComments);
    }

    if (post && post.User) {
        return (
            <div>
                <Header />
                <div className="post-detail-container" id={id}>
                    <div className="post-header">
                        <div></div>
                        <h4>{post.Topic}</h4>
                        {/*isAdmin ? (
                            <button className="delete-btn">Delete</button>
                        ) : (
                            <div></div>
                        )*/}
                        <div></div>
                    </div>

                    <div className="author-container">
                        <h6>
                            {post.User.Firstname} {post.User.Lastname}{' '}
                        </h6>
                        <p>{post.Timestamp.substring(0, 10)}</p>
                    </div>
                    <p>{post.Content}</p>
                    <NewComment
                        pid={id}
                        handlePostCommentData={(n, c) => postCommentData(n, c)}
                    />
                    <Comments
                        comments={comments}
                        deleteCommentLocal={(cid) => deleteCommentLocal(cid)}
                    />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default PostDetail;
