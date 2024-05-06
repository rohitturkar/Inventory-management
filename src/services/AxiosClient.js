import axios from "axios";

const productClient = axios.create({
    baseURL : 'http://localhost:3000/',
    timeout : 3000,
})


export  { productClient } ;