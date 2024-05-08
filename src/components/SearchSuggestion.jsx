
import { Link } from "react-router-dom";
const SearchSuggestion = ({data}) => {
 // console.log(data);
 
 

    return (
        <div>
        {data.map((singleData)=>(
          <Link to={`/searchPage?s=${singleData}`}  key={singleData}> <li className="hover:bg-gray-200 py-2 shadow-sm">{singleData}</li></Link>))}
        </div>
    )
} 
export default SearchSuggestion;