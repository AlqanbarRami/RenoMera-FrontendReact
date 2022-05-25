import axios from 'axios';


export const callerCustomer = axios.create({
    baseURL : 'https://localhost:5001/api/customer'
})

export const callerConstruction = axios.create({
    baseURL : 'https://localhost:5001/api/construction'
})

export const callerSupplier = axios.create({
    baseURL : 'https://localhost:5001/api/supplier'
})

export const callerRegister = axios.create({
    baseURL : 'https://localhost:5001/api/users'
})
