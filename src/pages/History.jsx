import React,{useEffect, useState} from 'react'
import { getHistory } from '../Services/Allapi'
import Table from 'react-bootstrap/Table';
import { HisdeleteVideo } from '../Services/Allapi';
import { toast } from 'react-toastify';


function History() {
  const[his,setHis]=useState([])
  const [delStatus,setDelStatus]=useState({})

  useEffect(()=>{
    getData()
  },[delStatus,])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
    
  }

    const handleDelete=async(id)=>{
      console.log(id)
      const res=await HisdeleteVideo(id)
      console.log(res)
      if(res.status>=200 && res.status<300){
        setDelStatus(res)
        toast.success("History Deletion successfully!!")
  
      }
      else{
        toast.error("History Deletion is failed!!")
      }
    }





  return (
   <>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>DateTime</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        his?
        his.map(item=>(
         <tr>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.Datetime}</td>
          <td>
          <i class="fa-solid fa-trash" onClick={()=>{handleDelete(item.id)}} style={{color:"#f5f5f5"}}></i>
          </td>
         </tr>

        ))
        :
        <tr>
          <p className='text-danger'>No Watch History</p>
        </tr>

      }
        
      </tbody>
    </Table>
   </>
  )
}

export default History