import { useEffect, useState } from "react";
import weatherServices from "../services/weater";

const CountryWeather = ({ name, lat, lng }) => {
  const [weather, setWeather] = useState(null);
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchWeater = async () => {
      try {
        const weatherIn = await weatherServices.searchWeater(lat, lng);
        const weatherObject = {
          temp: weatherIn.main.temp,
          image: weatherIn.weather[0].icon,
          wind: weatherIn.wind.speed,
        };
        setClima(weatherObject);
        setWeather(weatherIn);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeater();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <div>
      {weather === null ? (
        <div>
          <p>loading...</p>
        </div>
      ) : (
        <div>
          <h2>Weather in {name}</h2>
          <p>Temperature: {clima.temp}° Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${clima.image}@2x.png`}
            alt=""
          />
          <p>Wind {clima.wind} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather;
