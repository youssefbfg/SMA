import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import { Button } from "reactstrap";
function Home() {
  return (
    <div> 
      <Link to="/list">
    <Button color="info">Post list</Button>
    </Link>
<Link to="/addPost">
    <Button color="info">Add Post </Button>
    </Link>
 </div>
  )
}

export default Home