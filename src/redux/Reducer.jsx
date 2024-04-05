const initialState=localStorage.getItem('blogs')?JSON.parse(localStorage.getItem('blogs')):[];


export const AppReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return[...state, action.payload];
        case "REMOVE_BLOG":
            return state.filter((item)=>item.id !== action.payload)
        case "EDIT_BLOG":
            const myBlogs=state.map((item)=>{
                if(item.id===action.payload.id){
                    return action.payload
                } else {
                    return item;
                }               
            })
            return (state=myBlogs)
        default:
            return state;
    }
}