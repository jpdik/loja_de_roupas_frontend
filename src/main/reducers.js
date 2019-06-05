import { combineReducers } from 'redux'
import produtosReducer from '../dashboard/produtos/produtosReducer'


const rootReducer = combineReducers({
    produtos: produtosReducer
})

export default rootReducer