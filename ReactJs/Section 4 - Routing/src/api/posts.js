import instance from './axios';

export function createPost(data) {
    return instance({
       url: '/posts/',
       method: 'post',
       data 
    });
}

export function updatePost(id, data) {
    return instance({
        url: `/posts/${id}`,
        method: 'put',
        data
    });
}

export function deletePost(id) {
    return instance({
        url: `/posts/${id}`,
        method: 'delete'
    });
}

export function getPost(id) {
    return instance({
        url: `/posts/${id}`,
        method: 'get'
    });
}

export function getAllPosts(params={}) {
    return instance({
        url: '/posts/',
        method: 'get',
        params
    });
}