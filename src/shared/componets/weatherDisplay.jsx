import './style.css'

const WeatherDisplay = ({
    temp,
    temp_max,
    temp_min,
    speed,
    name,
    mainWeather,
    description,
    url,
    humidity
}) => {
    return (
        <div className="main">
            <div className='width100'>{name}</div>
            <div className='temp'>Temp: {temp}°F &nbsp;&nbsp;High: {temp_max}°F &nbsp;&nbsp;Low: {temp_min}°F</div>
            <div className='width50'>Wind Speed: {speed}Mph</div>
            <div className='width50'>humidity: {humidity}</div>
            <h1>{description}</h1>
            <img src={url} alt="Weather_Img" />
        </div>
    )
}

export default WeatherDisplay;