export const FETCH_POSTS = 'FETCH_POSTS'

export const getAllPosts = () => {
    return (dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>{
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        })
    }
   
}