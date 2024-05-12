import CountryWeater from "./weather";
const CountrySelected = ({ selectedCountry }) => {
  const name = selectedCountry[0].name.common;
  const capital = selectedCountry[0].capital[0];
  const area = selectedCountry[0].area;
  const languages = Object.values(selectedCountry[0].languages);
  const flag = Object.values(Object.values(selectedCountry[0].flags));
  
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={flag[0]} alt={flag[2]} />
        <CountryWeater name={name} lat={selectedCountry[0].latlng[0]}  lng={selectedCountry[0].latlng[1]} />
    </div>
  );
};

export default CountrySelected;
