import React, { useState, useEffect } from 'react';
import { deletePost, getPost } from '@/api/posts';
import './FullPost.css';

const fullPost = (props) => {
    let [postState, setPostState] = useState({ loadedPost: null });

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = async () => {
        if(props.match.params.id) {
            if (!postState.loadedPost || (postState.loadedPost && postState.loadedPost.id !== props.match.params.id)) {
                let response = await getPost(props.match.params.id);
                setPostState({loadedPost: response.data});
            }
        }
    }

    let deletePostHandler = async () => {
        setPostState({ loadedPost: null });
        let response = await deletePost(props.match.params.id);
        console.log(response);
    }

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if(props.match.params.id) {
        post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if(postState.loadedPost) {
        post = (
            <div className="FullPost">
                <h1>{postState.loadedPost.title}</h1>
                <p>{postState.loadedPost.body}</p>
                <div className="Edit">
                    <button
                        onClick={deletePostHandler}
                        className="Delete">Delete</button>
                </div>
            </div>

        );
    }
    
    return post;
}

export default fullPost;