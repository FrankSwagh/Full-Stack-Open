
const SearchCountry = ({listCountries, setFilteredCountries, countries}) => {
    const filteredCountries = listCountries.filter((country) => country.name.common.includes(countries));
    setFilteredCountries(filteredCountries);
    console.log(filteredCountries.length);

    return (
        <div>
        {listCountries.length <= 10 ? (
          <div>
            {
            listCountries.map((contry) => (
              <p key={contry.name.common}>{contry.name.common}</p>
            ))}
          </div>
        ) : (
          <div>too many matches, especify another filter</div>
        )}
      </div>
    )
  };

  export default SearchCountry;