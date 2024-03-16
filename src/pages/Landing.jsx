import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align items-center ' style={{ height: '80vh' }}>
        <div className="row p-5 shadow">
          <div className="col d-flex flex-column justify-content-center">
            <h1>Media Player</h1>
            <p>Explore media player for youtube video upload and managemeent. You can add and manage videos, categories and even chec</p>
            <div>
              <Link to={'/dash'} className="btn btn-success">Explore</Link>
            </div>
          </div>
          <div className="col " style={{borderColor:"2px while"}}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/911aae126401491.612cf941a82db.jpg" alt="img" className='img-fluid shadow' />
          </div>
        </div>
      </div>

      <div className="mt-3 p-5 ">
        <h1 className='text-center p-5' >Features</h1>
        <div className="d-flex mt-2 flex-row justify-content-between">
          
          <div ClassName="card" style={{width: "18rem"}}>
            <img ClassName="card-img-top" src="https://i.pinimg.com/originals/fb/d6/36/fbd636d695a9c16d1a24cb850241f943.gif" style={{height:"300px",}} alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">Card title</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div ClassName="card" style={{width: "18rem"}}>
            <img ClassName="card-img-top" style={{height:"300px",width:"300px"}}  src="https://media1.tenor.com/images/9b2727740f20d66eeeb300568926619e/tenor.gif?itemid=9696052" alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">Card title</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div ClassName="card" style={{width: "18rem"}}>
            <img ClassName="card-img-top" style={{height:"300px",width:"300px"}}  src="https://media.giphy.com/media/lA0szDkpv0E0g/giphy.gif" alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">Card title</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        
        </div>
      </div>
      <div  className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
        <div className='col'>
          <h2>Simple ,Fast & Secured</h2>
          <p>
            media player 2024 is a platform for simple and faster youtube video uploading and management video history too whare you get a simple video player interface wih app itself...

          </p>
        </div>
        <div className='col'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/avz06PDqDbM?si=1lkwn37So7yYTAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

      </div>

    </>
  )
}

export default Landing