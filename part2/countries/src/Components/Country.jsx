import Weather from "./Weather"

const Country = ({ country }) => {
    if (!country) {
        return null
    }

    const languages = []
    for (let [key, value] of Object.entries(country.languages)) {
        const obj = {
            key: key,
            language: value
        }
        languages.push(obj)
    }
    return (
        <div className="country">

            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <strong><p>Languages:</p></strong>
            <ul>
                {languages.map(lang => <li key={lang.key}>{lang.language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather country={country} />
        </div>
    )
}

export default Country