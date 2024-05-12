 import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAllPersons = () =>{
    const request = axios.get(baseURL)
   return request .then(response => response.data)
}

const createNewPerson = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data);
}

const updatePerson = (idPerson, updatedPerson) =>{
    const request = axios.put(` ${baseURL}/${idPerson}`, updatedPerson)
    return request.then(response => response.data)
}
const deletePerson = (idPerson) =>{
    const request = axios.delete(` ${baseURL}/${idPerson}`)
    return request.then(response => response)
    .catch(error => console.log(error));
}

export default {getAllPersons, createNewPerson, updatePerson, deletePerson}