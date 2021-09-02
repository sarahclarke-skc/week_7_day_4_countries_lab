import React from 'react';

const Country = ({country, onCountryClick}) => {
    
    const handleClick = function () {
        onCountryClick(country)
    }

    const image = {
        height: '50px',
        width: '70px'
    }

    const listStyle = {
        background: 'green',
        width: '300px',
        color: 'white',
        cursor: 'pointer'
    }

    return (
        <>
            <div style={listStyle} onMouseOver={handleClick}>
                <li><img style={image} src={country.flag}></img>{country.name}</li>
            </div>
        </>
    
    )

}

export default Country;