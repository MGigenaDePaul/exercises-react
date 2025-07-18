import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [name, setName] = useState('')
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null) // null is falsy, so the country details will show only after selection of a country

    useEffect(() => {
        console.log('effect')
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`).then(response => {
            setCountries(response.data)
        })
        .catch(() => {
            console.log("couldn't fetch countries")
        })
    }, [])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const dataCountry = (cca3) => {
        const foundCountry = countries.find(country => country.cca3 === cca3) 
        
        console.log("found country", foundCountry)
        console.log('filter countries', filterCountries)
        setSelectedCountry(foundCountry)
    }

    const filterCountries = countries.filter(c => c.name.common.toLowerCase().includes(name.toLowerCase()))

    return (
        <div>
            <p>find countries <input value={name} onChange={handleChange}/></p>
            {filterCountries.length  >  10 ? <p>Too many matches, specify another filter</p> 
                                            : filterCountries.map(country => <p key={country.cca3}>{country.name.common} <button onClick={() => dataCountry(country.cca3)}>show</button></p>)}

            {selectedCountry && (
                    <div>
                        <h1>{selectedCountry.name.common}</h1> 
                        <p>Capital: {selectedCountry.capital}</p>
                        <p>Area: {selectedCountry.area}</p>
                        <h2>Languages</h2>
                        <ul>
                            {Object.values(selectedCountry.languages).map((lang, index) => <li key={index}>{lang}</li>)} {/*learned the Object.values() method*/}
                        </ul> 
                        <img src={selectedCountry.flags.png} alt={`flag of ${selectedCountry.name.common}`}/>
                    </div>)}
        </div>
    )
}

export default App