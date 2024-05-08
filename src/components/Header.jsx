import notification_logo from "../assets/notification.svg";
import menu_logo from "../assets/menu.svg";
import profile_logo from "../assets/profile.svg";
import search_logo from "../assets/search.svg";
import video_logo from "../assets/video.svg"
import youtube_logo from "../assets/new-youtube.svg";
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import SearchSuggestion from "./SearchSuggestion";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
    const url ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
     const dispatch=useDispatch();
     const [searchValue,setSearchValue]=useState("");
     const [SearchedSuggestion,setSearchedSuggestion]=useState([]);
   //  console.log(SearchSuggestion);
     const [isvisible,setIsVisible]=useState(false);
     //console.log(isvisible);
     //console.log(searchValue);
     const searchCache=useSelector((store)=>store.search);
    // console.log(searchCache);
     const handleClick=()=>{
        console.log("clicked");
        dispatch(toggleMenu());
     } 
     useEffect(() => {
        const timer=setTimeout(()=>{
            if(searchCache[searchValue]){
                // console.log(SearchedSuggestion);
                // console.log("searchCache:"+searchCache);
                // console.log("searchCache[searchValue]:"+searchCache[searchValue]);
                setSearchedSuggestion(searchCache[searchValue]);
            }
            else{
                suggestions();
              // searchApi(); 
            }
            
            },200);
        return()=>{
            clearTimeout(timer);
        }
      // suggestions();
    },[searchValue]);
    const searchApi=async ()=>{

      
      
      try {
        const response = await fetch(url+searchValue);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }




    const suggestions= async()=>{
        const Json=await fetch(url+searchValue);
        const data=await Json.json();
     //   console.log(data);
        setSearchedSuggestion(data[1]);
       // console.log(data[1]);
        dispatch(cacheResults({
            [searchValue]: data[1],
        }))
    }
    const handleBlur = () => {
        // Delay hiding the suggestions to allow time for link click
        setTimeout(() => {
          setSearchValue((prevValue)=>"");
          setIsVisible(false);
        }, 1000);
      };
    
     return (
        
        <div className="h-[3rem] items-center justify-between flex w-12/12">
        <div className="flex space-x-6 pl-6">
           <img onClick={handleClick} className="w-[1.7rem] cursor-pointer" alt="menu" src={menu_logo}/>
          <Link to='/'> <img className="w-[5.8rem]" src={youtube_logo}/></Link>
        </div>
           <div className="flex w-5/12 border border-black rounded-full w-12/12 h-[2.5rem]">
            <input
            value={searchValue}
             onChange={(e)=>{
                setSearchValue(e.target.value);
                setIsVisible(true);
             } 
             }
             className="border w-11/12 px-2 rounded-s-full"
            //  onFocus={()=>setIsVisible("visible")}
               onBlur={handleBlur}
             />
           {isvisible&&<div className={" rounded-md z-10 absolute shadow-lg my-12 py-2 w-5/12 bg-white"}>
           <SearchSuggestion data={SearchedSuggestion}/>   
           </div> }    
           <img className="px-3 m-2" src={search_logo}/>
           </div>
           <div className="flex space-x-6">
           <img className="w-[2rem]" src={video_logo}/>
           <img className="w-[2rem]" src={notification_logo}/>
           <img className="w-[2rem]" src={profile_logo}/>
           </div>
           </div>
      
    )
} 
export default Header;