import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"


function CountryDetails(props) {
    const {countries} = props
    const { id } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        const foundCountry = countries.find( (country) => {
            return country.alpha3Code === id; 
        })

        if (foundCountry) setCountry(foundCountry)

    }, [id, countries])

    let URL = ""

    if (country) {
        let countryCode = country.alpha2Code.toLowerCase()
        URL = `https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`
    }

    return(
        <div>
            <img src = {URL} alt = "country"/>
            {country && country.alpha3Code}                
        </div>
    )

}

export default CountryDetails