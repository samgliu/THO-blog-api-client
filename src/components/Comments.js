//import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

function Comments({ comments, deleteCommentLocal }) {
    const { isAdmin } = useContext(GlobalContext);
    const id = useParams().id;
    const navigate = useNavigate();
    async function commentDeleteHandler(e) {
        e.preventDefault();
        const cid = e.target.parentElement.parentElement.id;
        await deleteComment(cid);
        deleteCommentLocal(cid);
    }
    function commentRender(comment) {
        return (
            <div
                key={comment._id}
                id={comment._id}
                className="comment-container"
            >
                <div>
                    <h6>{comment.Name}</h6>
                    <p className="time">{comment.Timestamp.substring(0, 10)}</p>
                </div>
                <div className="comment-wrapper">
                    <p>{comment.Content}</p>
                    {isAdmin ? (
                        <button
                            className="delete-btn"
                            onClick={commentDeleteHandler}
                        >
                            Delete
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        );
    }
    async function deleteComment(cid) {
        try {
            const params = `/${id}/comment/${cid}/delete`;
            const res = await axios.delete(
                params,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                { withCredentials: true }
            );
            if (res.status === 200) {
                navigate(`/${id}`);
            }
        } catch (err) {
            //setPosts(fortmatResponse(err.response?.data || err));
        }
    }
    return (
        <div className="comments-container">
            {comments.map((comment) => commentRender(comment))}
        </div>
    );
}

export default Comments;
