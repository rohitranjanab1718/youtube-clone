import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const Livechat = () =>{
    const [liveMessage,setLivemessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.chat.messages);
    console.log(chatMessage);
    useEffect (()=>{
        const time = setInterval(()=>
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)
            }
            )),2000)
    return ()=>clearInterval(time);
    })
    return(
        <>
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
            {
                chatMessage.map((chat,i)=>(
                    <Chatmessage key={i} name={chat.name} message = {chat.message}/>
                ))
            }
        </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
            e.preventDefault();
  
            dispatch(
              addMessage({
                name: "Akshay Saini",
                message: liveMessage,
              })
            );
            setLivemessage("");
          }}
        >
            <input className="px-2 w-96"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
            />
            <button className="px-2 mx-2 bg-green-100">send</button>
        </form>
        </>
    )
}
export default Livechat;