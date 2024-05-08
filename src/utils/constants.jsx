
import { IoMdTrendingUp } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { MdMusicNote } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiLiveFill } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { SiShopify } from "react-icons/si";
import { GiTrophy } from "react-icons/gi";
import { SiGooglenews } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { MdFeedback } from "react-icons/md";

const apikey=import.meta.env.VITE_ENCRYPTED_KEY;
export const YOUR_API_KEY=apikey;

//export const YOUR_API_KEY="AIzaSyC1KoKoFWlgDYqoCp0Scqw6CMvwF2w3Fdw";
export const video_api="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUR_API_KEY;
export const CHANNEL_INFO_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + YOUR_API_KEY
export const fetchTagsUrl =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  YOUR_API_KEY;

  export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&key=" + YOUR_API_KEY;

  
  export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=&key=${YOUR_API_KEY}`

  export const VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUR_API_KEY;

  export const TagNames = [
    "All",
    "Gaming",
    "Mixes",
    "React JS",
    "Freecodecamp",
    "Fortnite",
    "Namaste JavaScript",
    "Rohit Sharma",
    "Comedy",
    "T-series",
    "Thrillers",
    "Indian Premier League",
    "Programming",
    "Dramedy",
    "Cricket",
    "Football",
    "News",
    "JavaScript",
    "Prodcasts",
    "Comedy Clubs",
    "Data Structures",
  ];
  


//export const search_api="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+query+"&key="+YOUR_API_KEY;
export const Explore = [
  {
    icon: <IoMdTrendingUp className='w-5 h-10' />,
    name: "Trending"
  },
  {
    icon: <HiShoppingBag className='w-5 h-10' />,
    name: "Shopping"
  },
  {
    icon: <MdMusicNote className='w-5 h-10' />,
    name: "Music"
  },
  {
    icon: <BiSolidMoviePlay className='w-5 h-10' />,
    name: "Movies"
  },
  {
    icon: <RiLiveFill className='w-5 h-10' />,
    name: "Live"
  },
  {
    icon: <GiTrophy className='w-5 h-10' />,
    name: "Sports"
  },
  {
    icon: <SiGooglenews className='w-5 h-10' />,
    name: "News"
  },
  {
    icon: <SiYoutubegaming className='w-5 h-10' />,
    name: "Gaming"
  },
  {
    icon: <PiStudentFill className='w-5 h-10' />,
    name: "Learning"
  },
  {
    icon: <SiShopify className='w-5 h-10' />,
    name: "Fashion & Beauty"
  },
]


export const Premium = [
  {
    icon: <FaYoutube className='w-5 h-10' />,
    name: "YouTube Premium"
  },
  {
    icon: <SiYoutubestudio className='w-5 h-10' />,
    name: "YouTube Studio"
  },
  {
    icon: <SiYoutubemusic className='w-5 h-10' />,
    name: "YouTube Music"
  },
  {
    icon: <TfiYoutube className='w-5 h-10' />,
    name: "YouTube Kids"
  },
]

export const Setting = [
  {
    icon: <IoSettingsSharp className='w-5 h-10' />,
    name: "Settings"
  },
  {
    icon: <RiChatHistoryFill className='w-5 h-10' />,
    name: "Report History"
  },
  {
    icon: <IoMdHelpCircle className='w-5 h-10' />,
    name: "Help"
  },
  {
    icon: <MdFeedback className='w-5 h-10' />,
    name: "Send Feedback"
  },
];