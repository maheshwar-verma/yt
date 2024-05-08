import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { video_api } from "../utils/constants";
import BodyHeader from "./BodyHeader";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import CategoryList from "./CategoryList";

const MainContainer = ({ subprops }) => {
    const tagVideo = useSelector((store) => store.tag);
    const [videos, setVideos] = useState([]);
  //console.log();   
    useEffect(() => {
        if (tagVideo[subprops]) {
            setVideos(tagVideo[subprops]);
            console.log(tagVideo[subprops]);
        } else {
            getVideos();
        }
    }, [tagVideo]);

    const getVideos = async () => {
        try {
            const data = await fetch(video_api);
            const jsonData = await data.json();
            setVideos(jsonData?.items);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex">
                {/* Your Sidebar code */}
            </div>
            <div className="w-11/12">
                <BodyHeader />
                <div className="flex flex-wrap mx-2 p-2">
                    {videos.map((video) => (
                        <VideoCard props={video} key={video.id.videoId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainContainer;
