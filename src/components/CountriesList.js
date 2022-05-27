import { Link } from "react-router-dom";

function CountriesList(){
    return (
    <ul>
    <Link to="/Country1"> Country1 </Link>      
    <Link to="/Country2"> Country2 </Link>    
    <Link to="/Country3"> Country3 </Link>
  </ul>
  )

}

export default CountriesList