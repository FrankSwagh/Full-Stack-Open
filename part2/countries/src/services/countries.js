import axios from 'axios';
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const searchCountries = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
    .catch(error => console.log(error))
}

export default {searchCountries};