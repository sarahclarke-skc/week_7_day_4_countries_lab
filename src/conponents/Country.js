import { auto } from 'async';
import React from 'react';

const Country = ({country, onCountryClick}) => {
    
    const handleClick = function () {
        onCountryClick(country)
    }

    const image = {
        height: '50px',
        width: '70px'
    }

    return (
        <>
            <li onMouseOver={handleClick}><img style={image} src={country.flag}></img>{country.name}</li>
        </>
    
    )

}

export default Country;