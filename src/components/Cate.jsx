import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { uploadVideo } from '../Services/Allapi';
import { deleteVideo } from '../Services/Allapi';
import { toast } from 'react-toastify';
import Categories from './Categories';

function Cate() {
  const [show, setShow] = useState(false);

  const getdata=(e)=>{
    const {name,value}=e.target
    console.log(name,value);
  }


  const handleUpload= async()=>{

    if (!Categories){
      toast.warning("enter valid  data")
    }
    else{
      const res=await uploadVideo()
      console.log(res)
      if(res.status>=200 && res.status<300){

        toast.success("video uploaded successfully !!")
        handleClose()
      }
      else{
        toast.error("video uploading failed!!")
      }
    }
  }

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   

  const handleDelete=async()=>{
    const res=await deleteVideo()
  }

  return (
  <>
  <div className='d-grid'>
  <Button variant='primary' className='btn' onClick={handleShow}> Add Category</Button>
  
  </div>

  <Card style={{ width: '18rem' }} className='ms-3 mb-3'>
      <Card.Img variant="top" src="image "onClick={handleShow}  className='img-fluid'/>
      <Card.Body className="d-flex flex-row justify-content-between">
        <Card.Title>{"categories"}</Card.Title>
        <i className="fa-solid fa-trash" onClick={()=>{handleDelete()}} style={{color: '#e50606'}}></i>
      </Card.Body>
    </Card>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter category name"  onChange={(e)=>{getdata(e)}} />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="success">Save</Button>
        </Modal.Footer>
      </Modal>

  </>
  )
}

export default Cate