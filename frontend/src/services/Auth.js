import {defaults} from "../utils/header";
import api from "./api";
 
let config = {
    headers: defaults.headers
}

export function auth(data) {
    return api.post(`/login`, JSON.stringify(data), config)
}

export function cadastro(data) {
    console.log('data cadastro: ', data)
    return api.post(`/register`, data, config)
}