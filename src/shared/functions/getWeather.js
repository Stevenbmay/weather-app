import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=da71da60e2807e1b9289088d59771ea6"
const goeURL = "http://api.openweathermap.org/geo/1.0/direct?appid=da71da60e2807e1b9289088d59771ea6&limit=1"

export default async function getGifs(location) {
    const geo = await axios.get(goeURL + location);
    const lat = geo.data.lat;
    const lon = geo.data.lon;
    const response = await axios.get(weatherURL + "&lat=" + lat + "&lon=" + lon);
    const weather = response.data.main

    return weather.map((v) => ({
        temp: v.temp,
    }));
}
