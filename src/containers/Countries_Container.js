import React , {useState, useEffect} from 'react';
import CountryDetail from '../conponents/CountryDetail';
import CountryList from '../conponents/CountryList';
import Favourite from '../conponents/Favourite';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountry, setFavouriteCountry] = useState([]);
    
    useEffect(() => {
        getCountries();
    }, []);

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    const onFaveClick = (country) => {
        const favList = [...favouriteCountry, country]
        setFavouriteCountry(favList)
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
        {selectedCountry ? <CountryDetail onFaveClick={onFaveClick} country={selectedCountry}/> : null}
        {selectedCountry ? <Favourite countries={favouriteCountry}/> : []}
        

        </>
    )
};

export default CountriesContainer;