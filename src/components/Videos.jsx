// import React,{ useState,useEffect} from 'react'
import Videoscard from './Videocard'
import { getVideos } from '../Services/Allapi'
import { useEffect, useState } from 'react'

function Videos({addstatus}) {
    const [allVideos,setAllVideos]=useState([])
    const [delStatus,setDelStatus]=useState({})

    useEffect(()=>{
      getdata()
    }, [addstatus,delStatus])

    const getdata =async()=>{
      const res=await getVideos()
      // console.log(res.getdata)
      setAllVideos(res.data)
      // console.log(allVideos)
    }


  return (
<div className='bg-light border border-3 border-dark p-5 row flex'>
  {
    allVideos?
    allVideos.map (item=>(
       <Videoscard video={item} setDelStatus={setDelStatus}/>
    )):
    
    <h1>NO VIDEOS</h1>

  }

</div>



  )
}

export default Videos