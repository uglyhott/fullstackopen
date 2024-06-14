import CountryList from './CountryList'
import Country from './Country'

const Display = ({ countries, value }) => {
    if (countries.length === 0 || value === '') {
        return null
    } else {
        let filteredList = countries.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase()))
        if (filteredList.length > 10) {
            return <p>Too many results, please refine your filter</p>
        } else if (filteredList.length === 1) {
            return <Country country={filteredList[0]} />
        } else {
            return <CountryList countries={filteredList} />
        }
    }
}

export default Display