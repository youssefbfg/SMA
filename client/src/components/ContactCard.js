import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions";
import EditModal from "./EditModal";





  const PostCard = ({ post }) => {
const dispatch=useDispatch()
    const deletee=()=>{
      dispatch(deletePost(post._id))
    }
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {post.name} </CardTitle>
        <CardText>{post.email} </CardText>
        <CardText>{post.phone} </CardText>
        <CardText>
          {post.dateCreation.slice(0, 10)} ---{" "}
          {post.dateCreation.slice(11, 19)}{" "}
        </CardText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={deletee}>delete</Button>
          <EditModal post={post} />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;