import React , {useState, useEffect} from 'react';
import CountryList from '../conponents/CountryList';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        getCountries();
    }, []);

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
        <h2>This is a countries container</h2>
        <CountryList countries={countries}/>
        </>
    )
};

export default CountriesContainer;