import consts from '../main/consts'
import axios from 'axios'

export const changeMessage = event => ({
    type: 'MESSAGE_CHANGED',
    payload: event.target.value
})

export const getMessages = () => {
    const session_id = localStorage.getItem(consts.USER_SESSION) ?
        `/${localStorage.getItem(consts.USER_SESSION)}` : '';
    return dispatch => {
        axios.get(`${consts.BASE_URL}/chat${session_id}`)
            .then(res => {
                if(res.data.length <= 0)
                    dispatch(sendMessage(""))
                else
                    dispatch(messages_fetched(res))
            })
            .catch(err => dispatch(sendMessage("")))
    }
}

const messages_fetched = (request) => {
    return {
        type: 'CHAT_MESSAGES_FETCHED',
        payload: request
    }
}

export const storeUser = (request) => {
    return {
        type: 'USER_OBTAINED',
        payload: request
    }
}

export const clear = () => {
    return { type: 'MESSAGE_SENT' }
}

export const newMessage = (message) => {
    return { type: 'NEW_MESSAGE', payload: message }
}

export const getCart = () => {
    const session_id = localStorage.getItem(consts.USER_SESSION) ?
        `/${localStorage.getItem(consts.USER_SESSION)}` : '';
    const request = axios.get(`${consts.BASE_URL}/chat${session_id}`)
    return {
        type: 'CART_FETCHED',
        payload: request
    }
}

export const sendMessage = (message, label="") => {
    const session_id = localStorage.getItem(consts.USER_SESSION);
    return dispatch => {
        dispatch(newMessage(label ? label : message));
        dispatch(clear());
        axios.post(`${consts.BASE_URL}/chat`, { message, session_id })
            .then(res => dispatch(storeUser(res)))
            .then(() => dispatch(getCart()))
            .then(() => dispatch(getMessages()))
    }
}