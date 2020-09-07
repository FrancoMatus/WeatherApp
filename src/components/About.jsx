import React from 'react';
import './About.css';

export default function About(){
       return (<div className="divContainer">
            <h2><span>Weather App</span></h2>
            <p className="textContainer">
                In the "Weather App" (In spanish, "app del clima")
                we will find the climates of the cities, which
                we can search within the browser that
                appears in the upper right. When placing a city, 
                we will see its climate (The maximum temperature and the temperature
                minimum of said city). And if we place a city that doesn't exist
                or it is not defined in the application, an alert will appear that will say
                "City not found".
                App done by Franco Matus on <a href="https://www.soyhenry.com" target="_blank">Henry</a> Bootcamp of Full Stack Web Development
                </p>
                </div>
                )
            }