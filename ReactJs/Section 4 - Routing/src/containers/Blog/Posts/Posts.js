import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/api/posts';
import Post from '@/components/Post/Post';
import './Posts.css';

const posts = () => {
    let [postState, setPostState] = useState({ posts: [] });

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = async() => {
        let response = await getAllPosts();
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
            return { ...post, author: 'David'}
        });
        setPostState(() => {
            return {...postState, posts: updatedPosts}
        });
    }

    let postSelectedHandler = (id) => {
        setPostState(() => {
            return {...postState, selectedPostId: id}
        });
    }

    let posts = postState.posts.map(post => {
        return (
            <Link to={'/posts/' + post.id} key={post.id}>
                <Post 
                    title={post.title} 
                    author={post.author}
                    clicked={() => postSelectedHandler(post.id)} />
            </Link>
        );
    });

    return (
        <section className='Posts'>
            {posts}
        </section>
    );
}

export default posts;