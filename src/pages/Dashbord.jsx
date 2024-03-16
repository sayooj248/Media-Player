import React ,{useState}from 'react'
import { Col,Row } from 'react-bootstrap'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import Addvideos from '../components/Addvideos'
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'


function Dashbord (){
  const [addstatus,setaddstatus]=useState({})


  return (
    <>
    <div>
      <h3>Dashboard</h3>
      <Link to="/his" className='btn btn-rounded bg-white'> Watch Historty</Link>
      <Row className="p-3" >
        <Col sm='1' md="2">
          <Addvideos setaddstatus={setaddstatus}/>
        </Col>
        <Col sm='3' md='7'>
          <Videos addstatus={addstatus}/>
        </Col>
        <Col sm='2' md='3'>
        <Categories />
    
        </Col>
      </Row>
    
    </div>
    <ToastContainer/>
  
  
    
    
    </>
  )
}

export default Dashbord