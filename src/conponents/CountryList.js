import React from 'react';

const CountryList = ({countries}) => {

    const countryItems = countries.map((country, index)=> {
        return <li>{country.name}</li>
    }) 

    return (
        <>
        <ul>
        {countryItems}
        </ul>
        </>
    )

}

export default CountryList;