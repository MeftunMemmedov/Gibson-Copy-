export const addBlog=(blog)=>{
    return{
        type: "ADD_BLOG",
        payload: blog
    }
}

export const removeBlog=(id)=>{
    return{
        type: "REMOVE_BLOG",
        payload: id
    }
}

export const editBlog=(blog)=>{
    return{
        type: "EDIT_BLOG",
        payload: blog
    }
}