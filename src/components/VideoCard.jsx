import { Link } from "react-router-dom";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { formatTime } from "../utils/helper";

const VideoCard = ({props}) => {
  const [channelPic,setChannelPic]=useState("");
  const [ishover,setIsHover]=useState(false);
  const [viewCount,setViewCount]=useState("");
  let publishedtime=formatTime(props?.snippet?.publishedAt);
   // console.log(props);
    //console.log(props.statistics.viewCount);
    const Title=props.snippet.title;
    const trimmedTitle=Title.length>50?Title.slice(0,50)+"...":Title;
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
         // console.log(Json);
          //setChannelPic(Json.items[0].snippet.thumbnails.default.url)
          // if(videos){
            
          //   setViewCount(props.statistics.viewCount);
          // }
          // else{

          // }
         }
         VideoInfo();
      },[props]);

    return (
        
        <Link to={"/watch?v="+props.id}>
          <div className="w-[320px] h-[19rem] rounded-lg p- m-1"
          onMouseOver={()=>setIsHover(true)}
          onMouseOut={()=>setIsHover(false)}
          >
            <div>
              {!ishover?<img className="cursor-pointer rounded-lg" alt="img" src={props?.snippet?.thumbnails?.medium?.url}/>:
               <iframe 
         width="320px"
         height="180px"
        src={"https://www.youtube.com/embed/"+props.id+"?autoplay=1&mute=0"}
        title={props.snippet.title}
        frameBorder="0" 
        autoPlay={true}
        allowFullScreen >
        </iframe>
        }
            <div className="flex items-start">
            <img alt="img" src={channelPic} className="rounded-full m-2 h-10"/>
            <div>

            <h1 className="my-1 font-semibold">{trimmedTitle}</h1>
            <p className="text-sm">{props?.snippet?.channelTitle}</p>
            <div className="flex items-center">
              
            <p className="text-sm">
            {viewCount>1000000?(viewCount/1000000).toFixed(1)+"M views"
            :
            Math.round(viewCount/1000)+"k views"
            }
            </p> <span className="text-sm">{publishedtime}</span>
            </div>
            </div>
            </div>
          </div>
            </div>
          </Link>
    )
} 
export default VideoCard;