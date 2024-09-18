import React from "react";
import Comment from "./Comment";
import { commentsData } from "../utils/constants";
import CommentList from "./Commentlist";
const CommentsContainer = () =>{
    return(
           <div className = "m-5 p-2">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentList comments= {commentsData}/>
           </div>
    )
}

export default CommentsContainer;