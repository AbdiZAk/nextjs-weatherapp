import { useEffect, useState } from 'react'
import { getWeatherData } from '../../lib/weather-api'
import styles from './Weather.module.scss'
import WeatherCard from '../WeatherCard/WeatherCard'
import { Fragment } from 'react'

const Weather = ({weatherQuery}) => {
    const {lat, lon, location} = weatherQuery
    // const [weatherData, setWeatherData] = useState([])
    
    const fetchWeatherData = async (lat, lon) => {
        const data = await getWeatherData(lat, lon)
        console.log(data)
        return data
    }

    if (lat, lon) {
        // const weatherData = fetchWeatherData(lat, lon)
        console.log()
    }
    return (
        <Fragment>
            {/* <h1>{location}</h1> */}
            <div className={styles.Weather}>
                {/* {weatherData && 
                    console.log(weatherData)
                    
                } */}
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>
                <WeatherCard label={"lable"} data={"data"} icon={"icon"}/>  
                
            </div>
        </Fragment>
    )
}

export default Weather
