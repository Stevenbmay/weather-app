
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

const weatherRender = () => {
    return render(
        <WeatherDisplay
            {...dummyWeather}
        />
    )
}

describe("weather Display", () => {
    it("should render with temp", () => {
        const { baseElement } = weatherRender()
        const img = baseElement.querySelector("img")
        expect(img).toBeTruthy();
        expect(img.src).toBe(dummyWeather.url);
    })
    it("should render with temp", () => {
        const { queryByText } = weatherRender()
        const name = queryByText(dummyWeather.name)
        expect(name).toBeTruthy();
    })
})

