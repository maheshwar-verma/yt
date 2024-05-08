import { Link } from "react-router-dom";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constants";
import { useEffect, useState } from "react";


const SearchedVideoCard = ({props}) => {
    console.log(props)
    const [channelPic,setChannelPic]=useState("");
    const [ishover,setIsHover]=useState(false);
    const [viewCount,setViewCount]=useState("");
     // console.log(props);
      //console.log(props.statistics.viewCount);
      const Title=props.snippet.title;
      const trimmedTitle=Title.length>80?Title.slice(0,80)+"...":Title;
     // const videos=useSelector((store)=>store.tag);
      
      useEffect(()=>{
     //  console.log(videos);
       const channelInfo=async ()=>{
           const res=await fetch(CHANNEL_INFO_API+"&id="+props.snippet.channelId);
           const Json=await res.json();
          // console.log(Json);
           setChannelPic(Json.items[0].snippet.thumbnails.default.url);
          }
          channelInfo();
        },[props]);
        useEffect(()=>{
          const VideoInfo=async ()=>{
            const res=await fetch(VIDEO_DETAILS_API+"&id="+props?.id?.videoId);
            const Json=await res.json();
            if(Json.items.length==0){
              setViewCount(props.statistics.viewCount);
            }
            else{
  
              setViewCount(Json.items[0].statistics.viewCount); 
            }
          
           }
           VideoInfo();
        },[props]);
    return (
      <Link to={"/watch?v="+props.id.videoId}>
      {viewCount&&<div className="flex m-2 p-2">
         
          <div>

          <img className="rounded-2xl w-[94%] mx-auto lg:w-[29vw] md:w-[38.4vw] object-cover" alt="img" src={props?.snippet?.thumbnails?.medium?.url}/>
          </div>
          <div>
            <h1 className="mx-1 px-2 font-semibold text-xl w-[50vw]">{Title}</h1>
            <p className="text-md mx-1 px-2">
          {viewCount>1000000?(viewCount/1000000).toFixed(1)+"M views"
          :
          Math.round(viewCount/1000)+"k views"
          }
          </p>
          <div className="flex items-center my-2 mx-1 px-2">

            <img className="rounded-full h-[2.2vw]" src={channelPic} alt="pic"/>
            <span className="text-md mx-2">{props?.snippet?.channelTitle}</span>
          </div>
            <p className="mx-1 px-2 w-[50vw]">{props?.snippet?.description}</p>
          </div>
          
      </div>}
        </Link>
    )
} 
export default SearchedVideoCard;