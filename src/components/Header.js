import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store)=>store.search);
  const [searchValue,setSearchValue] = useState("");
  const [suggestion,setSuggestion] = useState("");
  const [showSuggestion,setShowSuggestion] = useState(false);
  
  console.log(searchValue);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (selector[searchValue]){
        setSuggestion(selector[searchValue]);
      }else{
        getSearchValues();
      }
      },200);
      return () =>{
        clearTimeout(timer);
      }
  },[searchValue]);
  const getSearchValues = async() =>{
    const dataApi = YOUTUBE_SEARCH_API + searchValue
    const data = await fetch(dataApi)  
    const json = await data.json();
    //console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(cacheResults({[searchValue]:json[1]}));
  }
  const handleToggleMenu=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className="h-8 cursor-pointer" alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" onClick={handleToggleMenu}/>
        <a href="/">
          <img
            alt="youtube-logo"
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
        </div>
        <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}/>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
        🔍
        </button>
        </div>
        <div>
          <img alt="user" className='h-8' src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
       {(suggestion && <div className="">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  )
}

export default Header;