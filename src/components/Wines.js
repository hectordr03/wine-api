import React from 'react';

const Wines = (props) => {
    return (
        <div className='wines-list' >
            <h2>Wine List</h2>
            {props.info.map(wine => (
                <div key={wine.id} className='wine' >
                    <img src={wine.picture} />
                    <h4>{wine.name}</h4>
                    <p>A {wine.year} wine from {wine.region}, {wine.country}</p>
                    <p>${wine.price}</p>
                    <p>{wine.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Wines;