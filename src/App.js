import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar'
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json"


function App() {
  return <div className="App">
    <Navbar />
    <Routes>
        <Route  path="/:id" element={<CountryDetails countries = {countries}/>} />  
    </Routes>

  </div>;
}



export default App;