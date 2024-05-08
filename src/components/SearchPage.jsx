import { useSearchParams } from "react-router-dom";
import BodyHeader from "./BodyHeader";
import SearchedVideoCard from "./SearchedVideoCard";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { YOUR_API_KEY } from "../utils/constants";
const SearchPage = () => {

 const [params]=useSearchParams();

 const [data,setData]=useState([]);
 const [query,setQuery] = useState("");
 const Searchquery=params.get("s").replace(" ", "+");
//console.log(data)
 useEffect(()=>{
     
     if(Searchquery!==query){
         setQuery(Searchquery);
         
        }
        const searchapi=async()=>{
        const search_api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${Searchquery}&key=${YOUR_API_KEY}`;

        const response = await fetch(search_api);
        const apiData = await response.json();
       // console.log(apiData)
        setData(apiData.items);

    }

    try{
        searchapi();
     }
    catch(err){
        console.log(err);
    }
 },[params])


    return (
        <div className="flex w-12/12">
           <div>
            <Sidebar/>
           </div>
           <div className="w-11/12">
            <BodyHeader/>
            <div className="">
            <h1 className="text-center items-center text-lg my-2 py-2">Showing results for: {params}</h1>
            {data.map((singledata)=><SearchedVideoCard key={singledata.id.videoId} props={singledata}/>)}
                
            </div>
           </div>
        </div>
    )
} 
export default SearchPage;