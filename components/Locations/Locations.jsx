import { useState } from 'react'
import LocationItem from '../LocationItem/LocationItem'
import Weather from '../Weather/Weather'
import styles from './Locations.module.scss'
import { Fragment } from 'react'


const Location = ({handleChange, data}) => {
	const [weatherQuery, setweatherQuery] = useState()
	const [visible, setVisible] = useState(true) 
  	return (
		<Fragment>
			{visible && <div className={styles.locations} >	
				{
					data.results.map((place, index) => {
						return (
								<LocationItem 
									key={index}
									location_name={place.formatted} 
									handleClick={()=> {
										handleChange={handleChange}
										let lat = data.results[index].lat
										let lon = data.results[index].lon
										let location = data.results[index].address_line1
										setVisible(!visible)
										setweatherQuery({"lat": lat, "lon": lon, "location": location})
										
									}}	
																
								/> 		
					)
				})} 
			</div>}

			{weatherQuery && 
				<Weather weatherQuery={weatherQuery}/>
			} 
			
		</Fragment>

       

  )
}

export default Location
