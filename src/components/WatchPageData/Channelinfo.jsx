import { useEffect,useState } from "react";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../../utils/constants";
import { formatNumberWithSuffix, formatTime } from "../../utils/helper";
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { BiLike, BiDislike } from 'react-icons/bi';
import { CiBellOn } from 'react-icons/ci'
import { PiShareFat, PiDotsThreeBold } from 'react-icons/pi'
import { MdOutlineDownloading } from 'react-icons/md'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import CommentsData from "./CommentsData";

const Channelinfo = ({props}) => {

    const [videoData,setVideoData]=useState({});
    const [isSubscribed,setIsSubscribed]=useState(false);
    const [channelData,setChannelData]=useState({});
    const [channelPicture, setChannelPicture] = useState('');
    const [subscribers,setSubscribers]=useState(1);
    const subscribercount=formatNumberWithSuffix(subscribers);
    const [like, setLike] = useState(true);
    const [disLike, setDisLike] = useState(true);
    const [showMore,setShowMore] = useState(false);
  const likeCount = formatNumberWithSuffix(videoData?.statistics?.likeCount);
  const viewCount = formatNumberWithSuffix(videoData?.statistics?.viewCount);
  let publishedtime=formatTime(videoData?.snippet?.publishedAt);
    console.log(videoData);
    useEffect(()=>{
        const VideoInfo=async ()=>{
          const res=await fetch(VIDEO_DETAILS_API+"&id="+props);
          const Json=await res.json();
          setVideoData(Json.items[0]);
        
         }
         VideoInfo();
      },[props]);
      useEffect(()=>{
        //  console.log(videos);
          const channelInfo=async ()=>{
              const res=await fetch(CHANNEL_INFO_API+"&id="+videoData.snippet.channelId);
              const Json=await res.json();
              setChannelData(Json.items[0]);
              console.log(Json.items[0]);
             // setChannelPic(Json.items[0].snippet.thumbnails.default.url);
             const channelpic=Json.items[0].snippet.thumbnails.default.url || '';
             setChannelPicture(channelpic);
             setSubscribers(Json.items[0].statistics.subscriberCount);
             }
             channelInfo();
           },[videoData?.snippet?.channelId]);

           const handleLikeToggle = () => {
            setLike(!like);
            setDisLike(true);
            like ? likeCount((prev) => prev - 1) : likeCount((prev) => prev + 1);
          };
        
          const handleDisLikeToggle = () => {
            setDisLike(!disLike);
            setLike(true);
            disLike ? likeCount((prev) => prev + 1) : likeCount((prev) => prev - 1);
          };
    return (
        <div className="m-2 p-2">
            
            <h1 className="text-2xl font-bold">{videoData?.snippet?.title}</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center py-2">
                    <img className="rounded-full h-[3vw]" alt="channelPic" src={channelPicture}/>
                    <div>   
                    <span>{videoData?.snippet?.channelTitle}</span>
                    <p>{subscribercount}</p>
                    </div>
                   { !isSubscribed?<button onClick={()=>{setIsSubscribed(!isSubscribed)}} className="rounded-s-full rounded-r-full border bg-black px-4 mx-4 p-2 m-2 text-white">Subscribe</button>
                    :<div onClick={()=>{setIsSubscribed(!isSubscribed)}} className='flex cursor-pointer  items-center gap-1 max-sm:gap-2 py-[5px] max-sm:py-[7px] px-2 mx-2 max-sm:px-5 bg-gray-200 rounded-full'>
                <CiBellOn className='text-black text-2xl animate-pulse' />
                <span className='max-sm:hidden text-sm'>Subscribed</span>
                <HiOutlineChevronDown className='text-black text-xl ' />
              </div>}
                </div>
               
              <div className='flex items-center bg-gray-100 rounded-full cursor-pointer'>
              <div className='flex items-center gap-2 py-[5px] px-3' >
            <div className='flex items-center gap-2 hover:bg-gray-200 hover:rounded-l-full py-[5px] px-3' onClick={handleLikeToggle}>
              {
                like ? (
                  <BiLike className='text-gray-500 bg-transparent text-xl cursor-pointer' />
                ) : (
                  <BiSolidLike className='text-black bg-transparent text-xl cursor-pointer' />
                )
              }
              <span className='text-sm'>{likeCount}</span>

            </div>
            <div className='hover:bg-gray-200 hover:rounded-r-full py-[7px] px-2' onClick={handleDisLikeToggle}>
              {
                disLike ? (
                  <BiDislike className='text-gray-500 bg-transparent text-xl cursor-pointer' />
                ) : (
                  <BiSolidDislike className='text-black bg-transparent text-xl cursor-pointer' />
                )
              }
            </div>
          </div>
          

          <div className='flex gap-2 items-center bg-gray-100 rounded-full py-[7px] px-3 cursor-pointer hover:bg-gray-200'>
            <PiShareFat className='text-xl text-gray-500' />
            <span className='text-sm'>Share</span>
          </div>
          {/* <div className='flex items-center gap-1 bg-gray-100 rounded-full py-[7px] px-3 font-bold cursor-pointer hover:bg-gray-200 md:hidden'>
            <MdOutlineDownloading className='text-xl' />
            <span>Download</span>
          </div> */}
          <div className='bg-gray-100 py-[7px] px-2 rounded-full cursor-pointer hover:bg-gray-200 max-sm:hidden'>
            <PiDotsThreeBold className='lg:text-xl' />
          </div>
        
            </div>
        
            </div>

            <div className='flex flex-col gap-1 bg-gray-100 rounded-2xl p-3 mt-2'>
        <div className='flex gap-2 items-center'>
          <span className='font-bold'>{viewCount} views</span>
          <div className='p-[0.5px] h-4 bg-gray-500'></div>
          <span>{publishedtime}</span>
        </div>
        <div>
          <p className={`text-sm overflow-hidden  ${(showMore) ? "line-clamp-none" : "line-clamp-4"}`}>
            {videoData?.snippet?.description}
          </p>
          <span className="text-xs font-bold cursor-pointer" onClick={() => setShowMore(!showMore)}>
            {
              showMore ? "Show Less" : "Show More..."
            }
          </span>
        </div>
      </div>

      <div>
        <CommentsData props={videoData.snippet.videoId}/>
      </div>
        </div>
    )
} 
export default Channelinfo;