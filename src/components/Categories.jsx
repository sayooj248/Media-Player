import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AddCategory } from '../Services/Allapi';
import { toast } from 'react-toastify';
import Category from './Category';




function Categories(delStatus) {
  const [show, setShow] = useState(false);

  const [addstatus,setaddstatus]=useState({})
  
  

const[category,setcategory]=useState({
  name:'',video:[]

})
const getcategory=(val)=>{
  if(val){
    setcategory({...category,name:val})
  }
}
  
const handleAdd= async()=>{
  console.log(category)
  if(category.name){
    const res=await AddCategory(category)
    if(res.status>=200 && res.status<300){
      toast.success(" catagory uploaded successfully !!")
      handleClose()
      setaddstatus(res,data)
      
    }
    else{
      toast.error("category uploading failed!!")
    }
  }
  else{
    toast.info("Enter valid Data")
  }
}


 
  const handleClose = () => {
  setShow(false);
  setcategory({
    name:'',video:[]
  })
  };
  const handleShow = () => setShow(true);


  return (
  <>
  <div className='d-grid'>
  <Button variant='primary' className='btn' onClick={handleShow}> Add Category</Button>
  
  </div>
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
        <Form.Control type="text" placeholder="Enter category name"  onChange={(e)=>{getcategory(e.target.value)} } />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
      <Category addstatus={addstatus} />

  </>
  )
}

export default Categories