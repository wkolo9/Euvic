import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://euvic-6cbab-default-rtdb.europe-west1.firebasedatabase.app/' //to store in database
    // baseURL: 'https://jsonplaceholder.typicode.com/todos/1'                          // to test api errors
})

export default instance;