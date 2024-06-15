import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Display from './Components/Display'
import Search from './Components/Search'


const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'

  useEffect(() => {
    axios
      .get(`${baseURL}/all`)
      .then(response => (
        setCountries(response.data)
      ))
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = (value) => {
    setValue(value)
  }

  return (
    <>
      <Search handleInput={handleChange} value={value} />
      <Display countries={countries} value={value} onCountryClick={handleClick} />
    </>
  )
}

export default App
