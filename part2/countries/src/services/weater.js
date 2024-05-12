import axios from 'axios';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
const api_key = import.meta.env.VITE_SOME_KEY;

const searchWeater = (lat, lon) => {
    const request = axios.get(`${baseURL}lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
.catch(error => console.log(error))
}

export default {searchWeater}
