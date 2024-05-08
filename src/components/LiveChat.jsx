import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice";
import {generateRandomName,generateRandomComment} from "../utils/helper";
import sendIcon from "../assets/send.svg";
const LiveChat = () => {
    
    const [ishidden,setIsHidden]=useState(false);
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const ChatMessages=useSelector((store)=>store.chat.messages);
    //console.log(ChatMessages);
    useEffect(()=>{
       const timer=  setInterval(()=>{
           //console.log("Api polling");
           dispatch(addMessages({
            name:generateRandomName(),
            message: generateRandomComment(),
           }))
         },1000);
         return ()=>clearInterval(timer);
    },[])

    return <>
      { !ishidden ? <div className="border border-gray-500 rounded-lg">
            <h1 className="font-semibold shadow-md text-lg">Live Chat:</h1>
        <div className="h-[500px] overflow-y-scroll flex flex-col-reverse">
            {ChatMessages.map((message)=>
            <ChatMessage
                data={message}
            />)}
        </div> 
        <form className="flex" onSubmit={(e)=>{
            
            e.preventDefault();
            dispatch(addMessages({
            name:"Maheshwar",
            message:liveMessage,
        }));
            setLiveMessage((prevMessage)=>"");

        }}>

             <input
              value={liveMessage}
              onChange={(e)=>setLiveMessage(e.target.value)} className="rounded-s-3xl  mx-10 w-7/12 rounded-e-3xl p-1 border border-gray-500 m-1" placeholder="comment"/>
              <button type="submit">

             <img src={sendIcon} alt="send" className="border hover:border-black w-[2rem]  rounded-3xl"/>
              </button>
        </form>
        <div className="flex my-2 py-2 border border-t-gray-500 ">

         <button className="cursor-pointer items-center font-semibold mx-auto hover:rounded-s-3xl hover:rounded-e-3xl hover:bg-gray-100 hover:px-14" onClick={()=>setIsHidden(true)}>Hide Chat</button>
        </div>
        </div>:(<button className="border border-black cursor-pointer items-center font-semibold mx-auto rounded-s-3xl rounded-e-3xl hover:bg-gray-100 px-14" onClick={()=>setIsHidden(false)}>Show live chat</button>)
        }
        </>
} 
export default LiveChat