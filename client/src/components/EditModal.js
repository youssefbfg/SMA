import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  import { useDispatch } from "react-redux";
import { editPost } from '../redux/actions';
function EditModal({post}) {
   const[modal,setModal]=useState(false)
   const[name,setName]=useState(post.name)
   const[email,setEmail]=useState(post.email)
   const[phone,setPhone]=useState(post.phone)
const dispatch=useDispatch()
const toggle=()=>{
setModal(!modal)
}
const editt=()=>{
  const newPost={name,email,phone}
dispatch(editPost(post._id,newPost))
toggle()
}  
  return (
    <div>
    <Button color="danger"  onClick={toggle}>
      edit post{" "}
    </Button>
    <Modal isOpen={modal}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
      onChange={(e)=>setEmail(e.target.value)}
     value={email}
           
              type="email"
              name="email"
              id="exampleEmail"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">name</Label>
            <Input
     
     onChange={(e)=>setName(e.target.value)}
     value={name}
              type="text"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">phone</Label>
            <Input
          onChange={(e)=>setPhone(e.target.value)}
          value={phone}
              type="text"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editt} >
          save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditModal