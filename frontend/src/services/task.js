
import {defaults} from "../utils/header";
import api from "./api";
 
let config = {
    headers: defaults.headers
}

export function createTask(data) {
    console.log('data: ', data)
    const obj = {
        title: data.titulo,
        status: true,
        message: data.mensagem,
        UserId: data.user.usuario.id,
        CategorieId: 1, // mudar pra trazer categoria
    }
    return api.post(`/tasks`, obj, config)
}

export function getTasks(userId) {
    return api.get(`/tasks/user/${userId}`, config)
}