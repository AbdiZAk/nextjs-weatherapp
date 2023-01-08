import axios from "axios"

const getData = async (text) => {
      
    try {
        const response = await axios.get(
            `https://weather-api-ashy-one.vercel.app/api/autocomplete?text=${text}`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "*"
                  }
            }
        )
        return response
    }
    catch (error) {
        return {Error: err.stack}
    }
}


export const getAutocompleteData = async (text) => { 
    const data = await getData(text)
    return data
}