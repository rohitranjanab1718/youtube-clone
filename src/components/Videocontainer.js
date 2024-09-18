import React, { useState,useEffect } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';
const Videocontainer = () => {
  const [videos,setVideos] = useState([]);
  const getVideos=async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
   }
   useEffect(()=>{
     getVideos();
   },[])
  return (
    <div className="flex flex-wrap">
       {videos.map((video)=> (
        <Link to={"/watch?v=" + video.id}>
          <Videocard key={video.id} info={video}/>
       </Link>
       ))}
    </div>
  )
}

export default Videocontainer