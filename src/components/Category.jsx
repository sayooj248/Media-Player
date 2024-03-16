import React from 'react'
import { useEffect, useState } from 'react'
import { getCategory } from '../Services/Allapi'
import { CatdeleteVideo } from '../Services/Allapi'
import { toast } from 'react-toastify'
import { Updatecategory } from '../Services/Allapi'
import { getSpecficVideo } from '../Services/Allapi'
import Videoscard from './Videocard'




function Category(addstatus) {
  const [Cat, SetCat] = useState([])
  const [delStatus, setDelStatus] = useState({})


  const handleDelete = async (id) => {
    console.log(id)
    const res = await CatdeleteVideo(id)
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      setDelStatus(res)
      toast.success("video Deletion successfully!!")

    }
    else {
      toast.error("Video Deletion is failed!!")
    }
  }



  useEffect(() => {
    getCat()
  }, [addstatus, delStatus])

  const getCat = async () => {
    const res = await getCategory()
    // console.log(res.data)
    SetCat(res.data)
  }

  const handleDrop =async (e, id) => {
    console.log("category id:" + id);
    const vid = e.dataTransfer.getData("videoId")
    console.log("Dropped video id:" + vid);
    let category = Cat.find(item => item.id == id)
    console.log(category)
    const res= await getSpecficVideo(vid)
    // console.log(res.data);
    category.video.push(res.data)
    console.log(category)
    const rescat=await Updatecategory(category,id)
    if(rescat.status>=200 && rescat.status<300){
      toast.success(`${res.data.caption}is addded to ${category.name}`)
      getCat()
    }
    else{
      toast.error("video adding to category is failed!!")
    }
  }


const handleDragOver = (e) => {
  e.preventDefault()
  console.log("Dragging over category");
}


return (
  <div className=' border  border-light p-3 mt-5'>
    {
      Cat ?
        Cat.map(item => (
          <div className='bg-primary mb-3 p-3 rounded shadow ' onDragOver={e => { handleDragOver(e) }} draggable onDrop={e => { handleDrop(e, item?.id) }}>
           <div>
           <span>{item.name}</span>
            <i className="fa-solid fa-trash float-end" onClick={() => { handleDelete(item.id) }} style={{ color: "#dd081d" }}></i>
            </div> 
            <div>
              {
                item?.video.map(v=>(
                  <Videoscard video={v} cat={true}/>
                ))
              }
            </div>


          </div>
        )) :
        <h1>No Categories </h1>
    }


  </div>
)
}

export default Category