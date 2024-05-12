import { useState, useEffect } from "react";
import countriesServices from "./services/countries";
import CountrySelected from "./components/country";
import CountryList from "./components/countryList";

const App = () => {
  const [search, setSearch] = useState("");
  const [listCountries, setListCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesList = await countriesServices.searchCountries();
        setListCountries(countriesList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
    searchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const searchCountry = () => {
    const filteredCountries = listCountries.filter((country) => {
      const lowerCaseCountry = country.name.common;
      return lowerCaseCountry.toLowerCase().includes(search);
    });
    setFilteredCountries(filteredCountries);
  };

  const handleCountries = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleChangeCountries = () => {
    if (!listCountries) return <div> </div>;
  };

  return (
    <>
      <form onChange={handleChangeCountries}>
        find countries{" "}
        <input type="text" onChange={handleCountries} value={search} />
      </form>
      <div>
        {filteredCountries.length < 10 && filteredCountries.length > 1 ? (
          <CountryList
            filteredCountries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
            setSearch={setSearch}
          />
        ) : filteredCountries.length === 1 ? (
          <CountrySelected selectedCountry={filteredCountries} />
        ) : (
          <div>too many matches, especify another filter</div>
        )}
      </div>
    </>
  );
};

export default App;
