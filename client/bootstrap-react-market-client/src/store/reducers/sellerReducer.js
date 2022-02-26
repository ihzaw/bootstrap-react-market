import { GET_SELLERS_LOADING, GET_SELLERS_ERROR, GET_SELLERS } from '../actionType'

const initialState = {
    sellers: [],
    getSellersLoading: false,
    getSellersError: ''
}

const sellerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SELLERS_LOADING:
            return {
                ...state,
                getSellersLoading: payload
            }
        case GET_SELLERS_ERROR:
            return {
                ...state,
                getSellersError: payload
            }
        case GET_SELLERS:
            return {
                ...state,
                sellers: payload
            }
        default:
            return state
    }
}

export default sellerReducer