//import { useContext, useEffect, useState } from 'react';
import apiClient from './http-common';

function NewComment({ pid, handlePostCommentData }) {
    let name = '';
    let content = '';

    function handleSubmitOnClick(e) {
        e.preventDefault();
        if (name !== '' && content !== '') {
            handlePostCommentData(name, content);
        }
    }

    return (
        <form>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                    name = e.target.value;
                }}
                required
            />

            <textarea
                type="text"
                rows="4"
                maxLength="200"
                id="content"
                name="content"
                placeholder="Write comments here..."
                onChange={(e) => {
                    content = e.target.value;
                }}
                required
            />
            <button
                type="submit"
                value="Submit"
                onClick={(e) => handleSubmitOnClick(e)}
            >
                Comment
            </button>
        </form>
    );
}

export default NewComment;
