import commonApi from "./commonApi";
import { base_url } from "./base_url";



export const uploadVideo=async(data)=>{
    return await commonApi("POST",`${base_url}/allvideos`,data)
}

export const getVideos=async()=>{
    return await commonApi("GET",`${base_url}/allvideos`,"")

}

export const deleteVideo=async(id)=>{
    return await commonApi("DELETE",`${base_url}/allvideos/${id}`,{})
}

export const AddCategory=async(data)=>{
    return await commonApi ("POST",`${base_url}/categories`,data)
}

export const getCategory=async()=>{
    return await commonApi ("GET",`${base_url}/categories`,"")
}
    
export const CatdeleteVideo=async(id)=>{
    return await commonApi("DELETE",`${base_url}/categories/${id} `,{})
}

export const AddHistory=async(data)=>{
    return await commonApi ("POST",`${base_url}/history`,data)
}

export const getHistory=async()=>{
    return await commonApi ("GET",`${base_url}/history`)
}

export const HisdeleteVideo=async(id)=>{
    return await commonApi("DELETE",`${base_url}/history/${id}`,{})
}


export const getSpecficVideo=async(id)=>{
    return await commonApi ("GET",`${base_url}/allvideos/${id}`,"")
}

export const Updatecategory=async(data,id)=>{
    return await commonApi("PUT",`${base_url}/categories/${id} `,data)
}