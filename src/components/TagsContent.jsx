import { useSearchParams } from "react-router-dom"
import { YOUR_API_KEY } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Body from "./Body";
import { useDispatch } from "react-redux";
import { addTags } from "../utils/tagSlice";

const TagsContent = () => {
    const dispatch=useDispatch();
    const [params]=useSearchParams();
    const query=params.get("tags").replace(" ", "+");
   ///console.log(query);
    const [videos,setVideos]=useState([]);
    const search_api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${YOUR_API_KEY}`;
    useEffect(()=>{
        const searchTags=async ()=>{
            const response=await fetch(search_api);
            const data=await response.json();
            //console.log(data)
            setVideos(data.items);
            dispatch(addTags({[query]:data.items}));
        }
        try{searchTags();}
        catch(err){
            console.log(err);
        }
    },[query]);

    return (
        <div>
          <Body props={query}/>
        {/* <div className="flex flex-wrap mx-2 p-2">
        {videos.map((video)=><VideoCard props={video} key={video.id}/>)}
        </div> */}
        </div>
    )
} 
export default TagsContent