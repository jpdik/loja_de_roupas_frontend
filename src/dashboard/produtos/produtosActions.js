import axios from 'axios'
import { BASE_URL } from '../../main/const'

export const obterProdutos = () => {
    const request = axios.get(`${BASE_URL}/produtos`)

    return {
        type: 'PRODUTOS_FETCHED',
        payload: request
    }
}