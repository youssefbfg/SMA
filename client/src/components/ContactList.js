import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions";
import PostCard from "./PostCard"

const PostList = () => {
  const dispatch=useDispatch()
useEffect(()=>{dispatch(getPosts())},[])

const posts=useSelector((state)=>state.posts.posts)
console.log(posts && posts,"testt")
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
    {posts &&
      posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
  </div>
  );
};

export default PostList;