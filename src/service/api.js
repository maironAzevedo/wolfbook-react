import axios from 'axios'

const create = axios.create({
    baseURL: 'https://wolfbook.herokuapp.com/'
})

export { create }