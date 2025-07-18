import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [name, setName] = useState('')
    const [countries, setCountries] = useState([])
    
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


    const filterCountries = countries.filter(c => c.name.common.toLowerCase().includes(name.toLowerCase()))

    return (
        <div>
            <p>find countries <input value={name} onChange={handleChange}/></p>
            {filterCountries.length === 1 
                ? filterCountries.map(country => 
                    <div key={country.cca3}>
                        <h1>{country.name.common}</h1> 
                        <p>Capital: {country.capital}</p>
                        <p>Area: {country.area}</p>
                        <h2>Languages</h2>
                        <ul>
                            {Object.values(country.languages).map((lang, index) => <li key={index}>{lang}</li>)} {/*learned the Object.values() method*/}
                        </ul> 
                        <img src = {country.flags.png}/>
                    </div>) 
                : filterCountries.length > 10 ? <p>Too many matches, specify another filter</p> : filterCountries.map(country => <p key={country.cca3}>{country.name.common}</p>)}
        </div>
    )
}

export default App