import React, { useState } from 'react';
import { createPost } from '@/api/posts';
import './NewPost.css';

const newPost = () => {
    let [titleState, setTitleState] = useState('');
    let [contentState, setContentState] = useState('');
    let [authorState, setAuthorState] = useState('');

    let postDataHandler = async () => {
        const data = {
            title: titleState,
            body: contentState,
            author: authorState
        };
        const response = await createPost(data);
        console.log(response);
    }

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input
                type="text"
                value={titleState}
                onChange={(event) => setTitleState(event.target.value)} />
            <label>Content</label>
            <textarea
                rows="4"
                value={contentState}
                onChange={(event) => setContentState(event.target.value)} />
            <label>Author</label>
            <select 
                value={authorState}
                onChange={(event) => setAuthorState(event.target.value)}>
                <option value="David">David</option>
                <option value="Carlos">Carlos</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );
}

export default newPost;