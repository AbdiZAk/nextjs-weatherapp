import styles from './WeatherCard.module.scss'
import Image from 'next/image'
const WeatherCard = ({lable, icon_slug, data, symbol, description, icon_url}) => {
    const forcast_url = `https://openweathermap.org/img/wn/${icon_url}@2x.png`
    return (
        <div className={styles.weather_card}>

            <div className={styles.card_header}>
                <h2>{lable}</h2>
                {icon_slug && <Image
                    src={`/icons/${icon_slug}.svg`}
                    alt={`lable ${icon_slug}`}
                    width={23}
                    height={23}
                />}
            </div>
            <div className={styles.forcast}>
                {icon_url && 
                    <Image
                        src={forcast_url}
                        alt={`lable ${icon_slug}`}
                        width={50}
                        height={50}
                />
                }
                {description ?
                    
                    <p>{description}</p>
                    
                : <h1>{data}{symbol}</h1>}
            </div>
        </div>
    ) 
}

export default WeatherCard
