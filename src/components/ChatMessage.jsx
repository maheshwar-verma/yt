import profile from "../assets/profile.svg";

const ChatMessage = ({data}) => {
    return (


        <div className="flex items-center">
        <img className="w-[2.5rem]" alt="user" src={profile}/>
        
            <p className="font-semibold">{data.name}</p>
            <p className="mx-2">{data.message}</p>
        
    </div>
     
       
        
    )
} 
export default ChatMessage