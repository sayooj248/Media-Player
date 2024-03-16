import axios from "axios";



const commonApi=async(reqMethod,apiurl,body)=>{
    const reqConfig ={
        method:reqMethod,
        url:apiurl,
        data:body,
        headers:{'Content-Type':'application/json'}
    }
    
    return await axios (reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })



}
 

export default commonApi