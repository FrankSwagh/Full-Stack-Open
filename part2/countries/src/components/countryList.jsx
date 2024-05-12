const CountryList = ({ filteredCountries, setFilteredCountries }) => {
  const handleCountryButton = (countrySelected) => {
    const selectedCountry = filteredCountries.filter((country) =>
      country.name.common.includes(countrySelected)
    );
    setFilteredCountries(selectedCountry);
  };

  return (
    <>
      {filteredCountries.map((contry) => (
        <>
          <p key={contry.name.common}>
            {contry.name.common}{" "}
            <button
              key={contry.name.common}
              onClick={() => handleCountryButton(contry.name.common)}
            >
              show
            </button>
          </p>
        </>
      ))}
    </>
  );
};

export default CountryList;
