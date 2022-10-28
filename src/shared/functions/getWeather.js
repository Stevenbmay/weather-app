import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=da71da60e2807e1b9289088d59771ea6"
const goeURL = "http://api.openweathermap.org/geo/1.0/direct?appid=da71da60e2807e1b9289088d59771ea6&limit=1"

export default async function getWeather(location) {
    const geo = await axios.get(goeURL + location);
    const lat = geo.data[0].lat;
    const lon = geo.data[0].lon;
    const response = await axios.get(weatherURL + "&lat=" + lat + "&lon=" + lon);
    const weather = response.data.weather
    const name = response.data.name



    const main = response.data.main
    const wind = response.data.wind
    const weathers = response.data.weather.find(v => v.main)
    const description = response.data.weather.find(v => v.description)
    const data = {
        name: name
    }

    let pic

    if (weathers.main == "Clouds") {
        if (description.description == "few clouds") {
            pic = {
                url: "http://openweathermap.org/img/wn/02d@2x.png"
            }
        }
        if (description.description == "scattered clouds") {
            pic = {
                url: "http://openweathermap.org/img/wn/03d@2x.png"
            }
        }
        if (description.description == "overcast clouds") {
            pic = {
                url: "http://openweathermap.org/img/wn/04d@2x.png"
            }
        }
        if (description.description == "overcast clouds") {
            pic = {
                url: "http://openweathermap.org/img/wn/04d@2x.png"
            }
        }
    } else if (weathers.main == "Thunderstorm") {
        pic = {
            url: "http://openweathermap.org/img/wn/11d@2x.png"
        }
    } else if (weathers.main == "Drizzle") {
        pic = {
            url: "http://openweathermap.org/img/wn/09d@2x.png"
        }
    } else if (weathers.main == "Rain") {
        pic = {
            url: "http://openweathermap.org/img/wn/10d@2x.png"
        }
    }
    else if (weathers.main == "Snow") {
        pic = {
            url: "http://openweathermap.org/img/wn/13d@2x.png"
        }
    } else if (weathers.main == "Mist" || weathers.main == "Smoke" || weathers.main == "Haze" || weathers.main == "Dust" || weathers.main == "Fog" || weathers.main == "Sand" || weathers.main == "Ash" || weathers.main == "Squall" || weathers.main == "Tornado") {
        pic = {
            url: "http://openweathermap.org/img/wn/50d@2x.png"
        }
    } else {
        pic = {
            url: "http://openweathermap.org/img/wn/01d@2x.png"
        }
    }

    const all = [Object.assign(main, data, wind, weathers, description, pic)]
    console.log(pic)



    return (
        all.map((v) => ({
            id: v.temp,
            temp: Math.round((v.temp - 273.15) * 9 / 5 + 32),
            temp_max: Math.round((v.temp_max - 273.15) * 9 / 5 + 32),
            temp_min: Math.round((v.temp_min - 273.15) * 9 / 5 + 32),
            name: v.name,
            speed: Math.round((v.speed * 2.237)),
            mainWeather: v.main,
            description: v.description,
            url: v.url
        }))
    )
}
