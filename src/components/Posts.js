//import { Link } from 'react-router-dom';
import Post from './Post';
import apiClient from './http-common';
import { useEffect, useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    /*
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };
    */
    useEffect(() => {
        async function getPostsData() {
            try {
                const res = await apiClient.get('/posts');
                const result = {
                    status: res.status + '-' + res.statusText,
                    headers: res.headers,
                    data: res.data,
                };
                setPosts(result.data);
            } catch (err) {
                //setPosts(fortmatResponse(err.response?.data || err));
            }
        }
        getPostsData();
    }, [setPosts]); // dependency
    function deletePostLocal(id) {
        const newPosts = posts.filter((post) => post._id !== id);
        setPosts(newPosts);
    }
    const postRender = (post) => {
        return (
            <Post
                post={post}
                key={post._id}
                deletePostLocal={(id) => deletePostLocal(id)}
            />
        );
    };

    if (posts) {
        return (
            <div className="posts-container">
                {posts.map((post) => postRender(post))}
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default Posts;
