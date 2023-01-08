import { useEffect, useState } from 'react'
import { getWeatherData } from '../../lib/weather-api'
import styles from './Weather.module.scss'
import { Fragment } from 'react'
import WeatherTemplate from './WeatherTemplate'
import WeatherLoader from '../Loaders/WeatherLoader'

const Weather = ({weatherQuery}) => {
    const {lat, lon, location} = weatherQuery
    const [weatherData, setWeatherData] = useState()
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchWeatherData = async (lat, lon) => {
            const response = await getWeatherData(lat, lon)
            setLoading(false)
            return setWeatherData(response.data)
        }
    
        if (lat, lon) {
            setLoading(true)
            fetchWeatherData(lat, lon)
            
        }
      }, []);

    return (
        <Fragment>
            <h1>{location}</h1>
            {loading &&
                    <WeatherLoader />

            }
            <div className={styles.Weather}>
                
                
                {weatherData && 
                    <WeatherTemplate weatherData={weatherData} />
                    
                }
                
        
            </div>
        </Fragment>
    )
}

export default Weather
