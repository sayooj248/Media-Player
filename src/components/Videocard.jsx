import { useState,useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { AddHistory, deleteVideo } from '../Services/Allapi';


function Videoscard ({video,setDelStatus,cat}) {
  const [show, setShow] = useState(false);

  const[history,setHistory]=useState({
    caption:video.caption,url:video.url,Datetime:''
  })


  const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteVideo(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setDelStatus(res)
      toast.success("video Deletion successfully!!")

    }
    else{
      toast.error("Video Deletion is failed!!")
    }
  }

  const handleClose = () => {
     AddHistory(history)
    setShow(false);
  
  }

  const handleShow = () => {
     const dt =new Date
     setHistory({...history,Datetime: new Date() })
    setShow(true);

  }
    const handleOnDrag=(e,id)=>{
    console.log("video is draging:id:"+id);
    e.dataTransfer.setData("videoid",id)
    // let category=Cat.find(item=>item.id==id)
    // console.log(category);
    }

  return (
    <>
     <Card style={cat?{width:'12rem'}:{ width: '16rem' }} className= ' ms-3 mb-3 border border-rounded ' draggable onDragStart={(e)=>{handleOnDrag(e,video?.id)}} >
      <Card.Img variant="top" src={video.image} onClick={handleShow}  className='  img-fluid'/>
      <Card.Body className="d-flex flex-row justify-content-between">
        <Card.Title>{video.caption}</Card.Title>
        {
          !cat &&
          <i className="fa-solid fa-trash" onClick={()=>{handleDelete(video.id)}} style={{color: '#e50606'}}></i>
        }
        
      </Card.Body>
    </Card>
    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default Videoscard