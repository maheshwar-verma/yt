import { useSelector } from "react-redux"
import appStore from "../utils/appStore"
import { Link } from "react-router-dom";
import BodyHeader from "./BodyHeader";
import shorts from "../assets/shorts.svg";
import home from "../assets/home.svg";
import about from "../assets/about.png";
import subscription  from "../assets/subscription.png";
import { Explore, Premium, Setting } from "../utils/constants";
const Sidebar = () => {
    const toggleMenu=useSelector((store)=>store.menu.isMenuopen);
 //   console.log(toggleMenu);
    return toggleMenu?<div className="bg-white items-center w-[80px] space-y-10">
    <div className=" my-2 hover:rounded-md py-1 hover:bg-gray-200 ">
     <img className="px-8 h-[1.2rem]" src={home}/>
     <p className="px-6 text-xs">Home</p> 

    </div>
    <div className=" my-4 hover:rounded-md py-1 hover:bg-gray-200">
     <img className="px-7 h-[1.4rem]" src={shorts}/>
     <p className="text-xs px-6">Shorts</p> 

    </div>
    <div className=" my-4 hover:rounded-md hover:bg-gray-200">
     <img className="px-7 h-[1.6rem]" src={subscription}/>
     <p className="text-xs px-3">Subscription</p> 

    </div>
    <div className=" my-2 hover:rounded-md py-1 hover:bg-gray-200">
     <img className="px-7 h-[1.5rem]" src={about}/>
     <p className="px-6 text-xs">About</p> 

    </div>

    </div>:(
        <div className="w-[240px] p-2 space-y-5 bg-white">
            
               <div className="flex my-2">
               <img className="h-[1.2rem] mx-6" src={home}/>
                <span><Link to="/">Home</Link></span>
               </div>           
               <div className="flex">
               <img className="h-[1.3rem] mx-6" src={shorts}/>
                <span><Link to="/">Shorts</Link></span>
               </div>           
               <div className="flex">
               <img className="h-[1.4rem] mx-6" src={subscription}/>
                <span><Link to="/">Subscription</Link></span>
               </div>           
                
                <ul className="border-t-2">
                <h1 className="text-lg font-semibold mx-2">Explore</h1>
                {Explore.map(({icon,name}) =>{
                return <div className="">
                    <li className="flex hover:bg-gray-100 rounded-lg space-x-5 items-center mx-6">
               <span>{icon}</span>
                <span><Link to={"/explore?tags="+name}>{name}</Link></span>

                    </li>
               </div>
                })}
                </ul>

                <ul className="border-t-2">
                <h1 className="text-lg font-semibold mx-2">Premium</h1>
                {Premium.map(({icon,name}) =>{
                return <div className="">
                    <li className="flex hover:bg-gray-100 rounded-lg space-x-5 items-center mx-6">
               <span className="text-red-600">{icon}</span>
                <span>{name}</span>

                    </li>
               </div>
                })}
                </ul>

                <ul className="border-t-2">
                <h1 className="text-lg font-semibold mx-2">Setting</h1>
                {Setting.map(({icon,name}) =>{
                return <div className="">
                    <li className="flex hover:bg-gray-100 rounded-lg space-x-5 items-center mx-6">
               <span>{icon}</span>
                <span>{name}</span>

                    </li>
               </div>
                })}
                </ul>
                
        </div>
    )
} 
export default Sidebar;