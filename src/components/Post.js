import { Link, useNavigate } from 'react-router-dom';
//import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import apiClient from './http-common';

function Post({ post, deletePostLocal }) {
    const { isAdmin } = useContext(GlobalContext);
    const navigate = useNavigate();
    async function handleDeleteOnClick(e) {
        e.preventDefault();
        const id = e.target.parentElement.parentElement.id;
        await deletePost(id);
        deletePostLocal(id);
    }
    async function deletePost(id) {
        try {
            const params = `/${id}/delete`;
            const res = await apiClient.delete(params);
            if (res.status === 200) {
                navigate('/');
            }
        } catch (err) {
            //setPosts(fortmatResponse(err.response?.data || err));
        }
    }
    return (
        <Link to={`${post._id}`}>
            <div className="post-container" id={post._id}>
                <div className="post-header">
                    <div></div>
                    <h4>{post.Topic}</h4>
                    {isAdmin ? (
                        <button
                            className="delete-btn"
                            onClick={handleDeleteOnClick}
                        >
                            Delete
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>

                <p className="content-preview">{post.Content}</p>
                <div className="author-container">
                    <h6>
                        {post.User.Firstname} {post.User.Lastname}{' '}
                    </h6>
                    <p>{post.Timestamp.substring(0, 10)}</p>
                </div>
            </div>
        </Link>
    );
}

export default Post;
