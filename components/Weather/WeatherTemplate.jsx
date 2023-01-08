import styles from './Weather.module.scss'
import WeatherCard from '../WeatherCard/WeatherCard'
import { formatUnixTime, formatNumbers } from '../../lib/fomat-data'
// import weatherData from '../WeatherCard/weatherData.json'

const WeatherTemplate = ({weatherData}) => {
    
    const { description, icon } = weatherData.weather[0]
    const { speed } = weatherData.wind
    const { sunset, sunrise} = weatherData.sys
    const { visibility } = weatherData
    const {temp, feels_like, temp_min, temp_max, pressure, humidity} = weatherData.main
    const template = [
        {
            lable: "Current Temp",
            data: formatNumbers(temp),
            icon_slug: "current_temp",
            symbol: "°"
        },
        {
            lable: "Feels Like",
            data: formatNumbers(feels_like),
            icon_slug: "feels_like",
            symbol: "°"
        },
        {
            lable: "Temp Min",
            data: formatNumbers(temp_min),
            icon_slug: "min_temp",
            symbol: "°"
        },
        {
            lable: "Temp Max",
            data: formatNumbers(temp_max),
            icon_slug: "max_temp",
            symbol: "°"
        },
        {
            lable: "Humidity",
            data: humidity,
            icon_slug: "humidity",
            symbol: "%"
        }, 
        {
            lable: "Forecast",
            forcast: description,
            icon_url: icon
        }, 
        {
            lable: "Wind Speed",
            data: formatNumbers(speed),
            icon_slug: "wind_speed",
            symbol: "mph"
            
        }, 
        {
            lable: "Visibility",
            data: formatNumbers(null, visibility),
            icon_slug: "visibility",
            symbol: "mi"
        },
        {
            lable: "Pressure",
            data: formatNumbers(null, pressure),
            icon_slug: "pressure",
            symbol: "Hg"
        },
        {
            lable: "Sun Set",
            data: formatUnixTime(sunset),
            icon_slug: "sunset",
            
        },
        {
            lable: "Sun Rise",
            data: formatUnixTime(sunrise),
            icon_slug: "sunrise",
            
        },
    ]
    let Degreesymbol = "°"

  return (
    <>
        {
            template.map((item, index) => {
                return (
                    <WeatherCard
                        key={index}
                        lable={item.lable} 
                        data={item.data} 
                        icon_slug={item.icon_slug} 
                        symbol={item.symbol}
                        description={item.forcast}
                        icon_url={item.icon_url}
                    />
                )

            })
        }
        </>

    
  )
}

export default WeatherTemplate
