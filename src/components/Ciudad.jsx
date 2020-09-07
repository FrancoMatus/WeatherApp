import React from "react";

export default function Ciudad({city}) { 
    if(city === null){
        return (
            <div className="container">
                <h1 className="card-text">The city what you search, doesn't exist.</h1>
            </div>
        )
    }
    return (
        
        <div className="container">
                <div className="card-body pb-4">
                    <h2><span className="card-title">{city.name}</span></h2>
                    <div className="card-text">
                        {console.log(city)}
                        <div><span className="card-text">Temperature: {city.temp} ºC</span></div>
                        <div><span className="card-text">Weather: {city.weather}</span></div>
                        <div><span className="card-text">Wind: {city.wind} km/h</span></div>
                        <div><span className="card-text">Clouds: {city.clouds}</span></div>
                        <div><span className="card-text">Latitude: {city.latitud}º</span></div>
                        <div><span className="card-text">Longitude: {city.longitud}º</span></div>
                    </div>
            </div>
        </div>
    )
}