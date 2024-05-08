import { useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Channelinfo from "./WatchPageData/Channelinfo";

const WatchPage = () => {
    const [search]=useSearchParams();
    // console.log(search.get("v"));
    // console.log(search);
    
    const screenWidth = window.innerWidth-20;
    return (
        <div>

        <div className="w-full object-cover">
        <iframe 
         width={screenWidth}
         height="559"
         autoPlay={true}
        src={"https://www.youtube.com/embed/"+search.get("v")+"?autoplay=1&mute=0"}
        title="Indian Idol S14 | Abhijeet&#39;s Challenge | Full Episode | 27 Jan 2024" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        </div>
        <div className="w-full flex">
        <div className="w-8/12">
         <div>
         <Channelinfo props={search.get("v")}/>

         
         </div>
        <CommentsContainer/>
        </div>
      <div className="w-4/12 m-2 p-5">

        <LiveChat/>
      </div>
        </div>
        </div>
    )
} 
export default WatchPage



