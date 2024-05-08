
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = ({props}) => {
console.log(props);
     return (
        <div className="flex w-12/12">
          <div className="">

            <Sidebar/>
          </div>
            <MainContainer subprops={props}/>
            
        </div>
    )
}

export default Body;