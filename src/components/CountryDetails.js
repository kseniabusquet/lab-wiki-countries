import axios from "axios"
import { useParams, Link } from "react-router-dom"
import {useEffect, useState} from 'react'
import {Plane} from 'react-loader-spinner'

function CountryDetails(props) {

    const {countries} = props
    let {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState({})


    id = id || countries[0].alpha3Code

    useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then(response => {
          setCountry(response.data)
          setLoading(false)
      })
      .catch(error => console.log(error))
    }, [id])

    const findCountry = (alpha3Code) => {
        return countries.find(country => country.alpha3Code === alpha3Code)
      }

    if(loading) {
      return (
        <div className = 'col-7'>
          <Plane />
        </div>
      )
    }

    return(
        <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:'30%'}}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {
                        country.borders.map (border => {
                            const borderCountry = findCountry(border)
                            return (
                                <li key ={border}><Link to={`/${border}`}>{borderCountry.name.common}</Link></li>
                            )
                        })
                    }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails