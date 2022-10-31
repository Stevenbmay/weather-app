import './style.css'

const WeatherDisplay = ({
    temp,
    temp_max,
    temp_min,
    speed,
    name,
    description,
    url,
    humidity
}) => {
    return (
        <div className="main">
            <div className='width100'>{name}</div>
            <div className='temp'>Temp: {temp}°F &nbsp;&nbsp;High: {temp_max}°F &nbsp;&nbsp;Low: {temp_min}°F</div>
            <div className='margin width50'>Wind Speed: {speed}Mph</div>
            <div className='width50'>Humidity: {humidity}</div>
            <h1 className=' margin'>{description}</h1>
            <img className='img' src={url} alt="Weather_Img" />
        </div>
    )
}

export default WeatherDisplay;