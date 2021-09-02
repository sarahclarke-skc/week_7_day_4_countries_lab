import React , {useState, useEffect} from 'react';
import CountryDetail from '../conponents/CountryDetail';
import CountryList from '../conponents/CountryList';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    useEffect(() => {
        getCountries();
    }, []);

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json(countries))
        .then(countries => setCountries(countries))
        .catch(error => console.error)
    }

    const population = countries
    .map((country) => country.population)
    .reduce((total, runningTotal) => total + runningTotal, 0)
    
    console.log(population)

    return (
        <>
        <h2>The total population of our overpopulated planet: {population}</h2>
        <CountryList countries={countries} onCountryClick={onCountryClick}/>
        {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </>
    )
};

export default CountriesContainer;