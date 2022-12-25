import { useState } from 'react'
import styles from './LocationItem.module.scss'

const LocationItem = ({location_name, handleClick, handleChange, weatherData}) => {

    
    return (
        <>
            <h3 
                onChange={handleChange}
                className={styles.location_item}
                onClick={handleClick}
                
                >
                    {location_name}
            </h3>
        </>
        
  )
}

export default LocationItem
