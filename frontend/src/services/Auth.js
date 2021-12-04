import axios from "axios";
import {defaults} from "../utils/header";

const {REACT_APP_API_URL} = process.env  

let config = {
    headers: defaults.headers
}

export function auth(data) {
    console.log(data)
    return axios.post(`${REACT_APP_API_URL}/login`, JSON.stringfy(data), config)
}