import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import { connect } from "react-redux";
import WeatherDisplay from "../shared/componets/weatherDisplay";
import getWeather from "../shared/functions/getWeather";
import { setLocation } from "../shared/redux/locationRedux";


const WeatherPage = ({ weatherResults, setWeatherResults }) => {
    const [city, setCity] = useState("");
    const [URL, setURL] = useState(null);
    const [state, setState] = useState("")
    const { error } = useQuery(["getWeather", URL], () => getWeather(URL), {
        onSuccess: (data) => setWeatherResults(data),
        enabled: !!URL,
    });

    return (
        <div>
            <label htmlFor="city">City</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
            <label htmlFor="states">Chose state</label>
            <select name="states" onChange={(e) => setState(e.target.value)}>
                <option value="" >none</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>

            <button onClick={() => {
                if (city) { setURL(`&q=${city},${state},US`); }
            }}>Search</button>

            {error && "Something went wrong!"}
            {!error && weatherResults.map((v) => <WeatherDisplay
                key={v.id}
                {...v}
            />)}
        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    setWeatherResults: (results) => dispatch(setLocation(results)),
});

const mapStateToProps = (state) => ({

    weatherResults: state.location,
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);