import axios from 'axios';
require('dotenv').config();
export default axios.create({
    //baseURL: `http://${process.env.REACT_APP_BLOG_API}`,
    baseURL: process.env.REACT_APP_BLOG_API,
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
});
