
import React from "react";
import { render } from "@testing-library/react";
import WeatherDisplay from "./weatherDisplay"

const dummyWeather = {
    temp: "50",
    temp_max: "51",
    temp_min: "52",
    speed: "20",
    name: "omaha",
    description: "rain",
    url: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: "50"
}

const weatherRender = (renderOptions = {}) => {
    return render(
        <WeatherDisplay
            {...dummyWeather}
        />
        , renderOptions
    )
}

describe("weather Display", () => {
    describe("rendering", () => {
        it("should render with temp", () => {
            const { queryByText } = weatherRender()
            const temp = queryByText(dummyWeather.temp)
            expect(temp).toBeTruthy();
        })
    })
})

