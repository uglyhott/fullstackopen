const Search = ({ handleInput, value }) => {
    return (
        <div className='search'>
            <label htmlFor="search">find countries: </label>
            <input
                onChange={handleInput}
                value={value}
                id='searchInput'
                type="text" />
        </div>
    )
}

export default Search