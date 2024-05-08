import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { YOUTUBE_COMMENTS_API } from '../../utils/constants';
//import Comments from '';


const CommentsData = ({props}) => {
  console.log(props)
   const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const data = await fetch(`${YOUTUBE_COMMENTS_API}&order=relevance&videoId=${props}`);
      const response = await data.json();
      if (response?.items) {
        setComments(response.items);
      } else {
        console.error('No comments found in the API response');
      }
    } catch (error) {
      console.error("Error while fetching comments", error);
    }
  };
    return (
        <div>
            
        </div>
    )
} 
export default CommentsData;