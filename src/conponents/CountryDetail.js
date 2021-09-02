import React from 'react';

const CountryDetail = ({country}) => {

    const detailStyle = {
        position: 'fixed',
        right: '2rem',
        top: '8rem',
    }

    const languageList = country.languages.map((language) => {
        return <span>{language.name} | </span>
    })

    return (
        <div style={detailStyle}>
            <h4>{country.name}</h4>
            <h5>Native name: {country.nativeName}</h5>
            <h5>Official language(s): {languageList}</h5>
            <h5>Population: {country.population}</h5>
            <h5>Region: {country.region}</h5>
        </div>
    )
}

export default CountryDetail;