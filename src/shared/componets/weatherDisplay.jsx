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
            <div className='width100'><h1>{name}</h1></div>
            <div className='width50'>Temp {temp}°F &nbsp;&nbsp;High {temp_max}°F &nbsp;&nbsp;Low {temp_min}°F</div>
            <div className='width50'>Wind Speed: {speed}Mph</div>
            <h1>{description}</h1>
            <img src={url} alt="asf" />
        </div>
    )
}

export default WeatherDisplay;