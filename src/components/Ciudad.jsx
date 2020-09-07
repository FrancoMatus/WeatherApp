import React from "react";

export default function Ciudad({city}) { 
    if(city === null){
        return (
            <div className="container">
                <h1>The city what you search, doesn't exist.</h1>
            </div>
        )
    }
    return (
        
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        {console.log(city)}
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}