import { useState, useEffect } from "react"
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const url = import.meta.env.VITE_WEATHER_URL
        const apiKey = import.meta.env.VITE_KEY
        axios
            .get(`${url}/geo/1.0/direct?q=${country.capital},${country.name.common}&limit=1&appid=${apiKey}`)
            .then(response => {
                return axios.get(`${url}/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`)
            })
            .then(response => {
                const newObj = { ...response.data }
                setWeather(newObj)
                setIcon(`https://openweathermap.org/img/wn/${newObj.weather[0].icon}@2x.png`)
            })
            .catch(error => { throw 'error' })
    }, [])

    if (!weather) {
        return null
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <img src={icon} alt="weather icon" />
            <p>The temperature is {weather.main.temp} Celsius</p>
            <p>Wind speed: {weather.wind.speed} m/s</p>
        </div>
    )

}

export default Weather