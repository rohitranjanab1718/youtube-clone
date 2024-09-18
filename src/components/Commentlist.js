import React from "react";
import Comment from "./Comment";
const CommentList = ({comments}) =>{
    console.log(comments);
    return comments.map((comment,index)=>(
     <div key = {index}>
         <Comment data={comment}/>
     </div>
     ))
 }

 export default CommentList