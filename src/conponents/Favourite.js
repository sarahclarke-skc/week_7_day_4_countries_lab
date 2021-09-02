import React from 'react';

const Favourite = ({countries}) => {

    const faveStyle = {
        height: '30px',
        width: '42px'
    }

    const styleFaveList = {
        position: 'fixed',
        top: '30rem',
        right: '2rem'
    }

    const faveList = countries.map((country) => {
        return (
            <div>
                <img src={country.flag} style={faveStyle}></img>
                <div>{country.name}</div>
            </div>
            )
        }
    )

    return (
    <>
    <div style={styleFaveList}>
        <h2>Favourites List</h2>
        {faveList}
    </div>
    </>
    )
}

export default Favourite;