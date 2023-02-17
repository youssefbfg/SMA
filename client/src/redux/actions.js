import axios from "axios"
import { GET_POSTS } from "./actionTypes"

export const getPosts=()=>(dispatch)=>{
axios.get("/api/posts/")
.then((res)=>dispatch({type:GET_POSTS,payload:res.data}))
.catch((err)=>console.log(err))
 
}

export const addPost=(newPost)=>(dispatch)=>{
axios.post("/api/posts/add",newPost)
.then((res)=>dispatch(getPosts()))
.catch((err)=>console.log(err))
}

export const deletePost=(idPost)=>(dispatch)=>{
axios.delete(`/api/posts/delete/${idPost}`)
.then((res)=>dispatch(getPosts()))
.catch((err)=>console.log(err))
}

//edit
export const editPost=(idPost,editedPost)=>(dispatch)=>{
axios.put(`/api/posts/edit/${idPost}`,editedPost)
.then((res)=>dispatch(getPosts()))
.catch((err)=>console.log(err))
}