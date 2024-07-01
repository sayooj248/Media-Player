import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/Allapi';
import { toast } from 'react-toastify';

function Addvideos({setaddstatus}) {
    const [show, setShow] = useState(false);
    const[video,setVideo]=useState({
      caption:'',url:'',image:''
    })

    const getdata=(e)=>{
      //const{sname,age}={sname:"hello",age:20}
      const {name,value}=e.target
      console.log(name,value);

    if(name==="caption"){
      setVideo({...video,caption:value})
    }
    if(name==="url"){
     let furl=value
     furl=furl.split("v=")
     console.log(furl);
     let vurl=`https://www.youtube.com/embed/${furl[1]}?si=B4O3kmBpmwcQFsLb&autoplay=1`
     console.log(vurl);
     
      setVideo({...video,url:vurl})
    }
    if(name==="image"){
      setVideo({...video,image:value})
    }
   


    }
    console.log(video);

    const handleUpload= async()=>{
      console.log(video);
      const{caption,url,image}=video

      if(!caption || !url || !image){
        toast.warning("enter valid  data")
      }
      else{
        // console.log(video);
        const res=await uploadVideo(video)
        console.log(res)
        if(res.status>=200 && res.status<300){
          setaddstatus(res.data)
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
  return (

  <>
         <span className='btn' onClick={handleShow}>
         <i class="fa-solid fa-circle-plus"></i>
         </span>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Caption</Form.Label>
        <Form.Control type="text" placeholder="Enter-video-caption" name='caption' onChange={(e)=>{getdata(e)}} />
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> URL</Form.Label>
        <Form.Control type="text" placeholder="Enter-youtube-video-URL"name='url' onChange={(e)=>{getdata(e)}}/>
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter-Thumbnail image-URL" name='image' onChange={(e)=>{getdata(e)}}/>
      </Form.Group>
          </Form>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary ">Upload</Button>
        </Modal.Footer>
      </Modal>
      
      </>
  )
}

export default Addvideos