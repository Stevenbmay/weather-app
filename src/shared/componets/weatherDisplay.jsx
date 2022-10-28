import './style.css'

const WeatherDisplay = ({
    temp,
    temp_max,
    temp_min,
    speed,
    name,
    mainWeather,
    description,
    url
}) => {
    return (
        <div className="main">
            <h1>{name}</h1>
            <h2>Temp {temp}°F &nbsp;&nbsp;High {temp_max}°F &nbsp;&nbsp;Low {temp_min}°F</h2>
            <h2>Wind Speed: {speed}Mph</h2>
            <h1>{description}</h1>
            <img src={url} alt="asf" />
        </div>
    )
}

export default WeatherDisplay;