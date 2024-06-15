const CountryList = ({ countries, onCountryClick }) => {
    return (
        <ul>
            {countries.map(country =>
                <li key={country.cca3}>
                    {country.name.common}
                    <button onClick={() => onCountryClick(country.name.common)}>
                        Show
                    </button>
                </li>
            )}
        </ul>
    )
}

export default CountryList