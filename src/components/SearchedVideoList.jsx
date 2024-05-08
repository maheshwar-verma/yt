import { useSearchParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { YOUR_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import Body from "./Body";
const SearchedVideoList = () => {
    const [query,setQuery]=useState("");
    const [data,setData]=useState({});
    console.log(data.items);
    const [search]=useSearchParams();
   // const searchQuery=search.get("s");
    //const search_api="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+query+"&key="+YOUR_API_KEY;
    useEffect(() => {
        const searchQuery = search.get("s");
        
        // Check if the query has changed before updating state
        if (searchQuery !== query) {
            setQuery(searchQuery);
            console.log(searchQuery);

            const search_api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUR_API_KEY}`;
           
            const searchedList = async () => {
                try {
                    const response = await fetch(search_api);
                    const apiData = await response.json();
                    setData(apiData);
                    console.log(apiData);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            searchedList();
        }
    }, [search, query]);
    return (
        <div className="flex flex-wrap">
            {/* <h1 className="text-3xl">Search page</h1> */}
             <Body/>
            {data.items&&(data.items).map((item) => {
                return  <VideoCard props={item} key={item.etag}/>;
            
            })}
            
        </div>
    )
} 
export default SearchedVideoList;