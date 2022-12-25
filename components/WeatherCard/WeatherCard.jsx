import styles from './WeatherCard.module.scss'

const WeatherCard = ({lable, data, icon}) => {
    return (
        <div className={styles.weather_card}>
            <div className={styles.card_header}>
                <h2>{"lable"}</h2>
                <h3>{icon}</h3>
            </div>
            <h1>{data}</h1>
        </div>
    ) 
}

export default WeatherCard
