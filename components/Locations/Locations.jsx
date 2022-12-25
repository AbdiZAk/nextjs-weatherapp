import { useState } from 'react'
import LocationItem from '../LocationItem/LocationItem'
import Weather from '../Weather/Weather'
import styles from './Locations.module.scss'
import Data from './testdata.json'
import { Fragment } from 'react'

const Location = ({handleChange, data}) => {
	const [weatherQuery, setweatherQuery] = useState([])
	const [visible, setVisible] = useState(false) //FIX ME 
  	return (
		<Fragment>
			{visible && <div className={styles.locations} >	
				{
					Data.results.map((place, index) => {
						return (
								<LocationItem 
									key={index}
									location_name={place.formatted} 
									handleClick={()=> {
										handleChange={handleChange}
										let lat = Data.results[index].lat
										let lon = Data.results[index].lon
										let location = Data.results[index].address_line1
										setVisible(false)
										setweatherQuery({"lat": lat, "lon": lon, "location": location})
									}}	
																
								/> 		
					)
				})} 
			</div>}

			{/* {weatherQuery&& 
				// console.log(weatherQuery)
				<Weather weatherQuery={weatherQuery}/>
			} */} 
			{/* FIX ME */}
			<Weather weatherQuery={weatherQuery}/>
		</Fragment>

       

  )
}

export default Location
