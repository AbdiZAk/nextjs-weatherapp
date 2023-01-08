import axios from "axios"

const getData = async (lat, lon) => {
    try {
        const response = await axios.get(
            `https://weather-api-ashy-one.vercel.app/api/weather/?lat=${lat}&lon=${lon}`
        )
        return response
    }
    catch (error) {
        return {Error: err.stack}
    }
}


export const getWeatherData = async (lat, lon) => { 
    const data = await getData(lat, lon)
    return data
}