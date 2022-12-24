import React from 'react'
import styles from './Location.module.scss'

const Location = ({data}) => {
	
  return (
		
        <div className={styles.locations}>	
			{
				data.results.map((place, index) => {
					return (
						
						<div className={styles.item} key={index}>
							<h3 >{place.formatted}</h3>  
						</div>
                )
			})}
		
        </div>

       

  )
}

export default Location
