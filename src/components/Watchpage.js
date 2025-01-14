import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './Commentscontainer';
import Livechat from './Livechat';
export const Watchpage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    console.log(searchParams);
    const url = searchParams.get('v');
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex w-full">
      <div>
      <iframe
        width="900"
        height="600"
        src={"https://www.youtube.com/embed/" + url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
    <div className="w-full">
        <Livechat />
    </div>
    </div>
        <CommentsContainer/>
    </div>
  )
}
