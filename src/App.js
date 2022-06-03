import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {

  const [countries, setCountries] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data.reverse())
        setLoading(false)
    })

    .catch(error => console.log(error))
  }, [])

  return <div className="App">
    <Navbar />
    <div className="container">
    <div className="row">
      {loading && <p>Loading...</p>}

      
        {!loading && (
          <>
          <CountriesList countries = {countries}/> 
            <Routes>
              <Route path='/' element = {<CountryDetails countries = {countries} /> } />
              <Route path='/:id' element = {<CountryDetails countries = {countries} /> } />      
            </Routes>
            </>
        )
      } 
      
      
    </div>
    </div>
  </div>;
}



export default App;