import CountryList from './CountryList'
import Country from './Country'

const Display = ({ countries, value, onCountryClick }) => {
    if (countries.length === 0 || value === '') {
        return null
    } else {
        const filteredList = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(value.toLowerCase())
        })
        console.log(filteredList.length)
        if (filteredList.length > 10) {
            return <p>Too many results, please refine your filter</p>
        } else if (filteredList.length === 1) {
            return <Country country={filteredList[0]} />
        } else {
            return <CountryList countries={filteredList} onCountryClick={onCountryClick} />
        }
    }
}

export default Display