import { GET_POSTS } from "./actionTypes"

const initState={
    posts:[]
}
export const postReducer=(state=initState,action)=>{
switch(action.type){
    case GET_POSTS:
        return{
            ...state,
            posts:action.payload
        }
        default:
            return state
}
}