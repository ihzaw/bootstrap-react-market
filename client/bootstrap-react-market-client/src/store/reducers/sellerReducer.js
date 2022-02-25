const initialState = {
    sellers: []
}

const sellerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case value:{
            return {
                ...state,
                sellers: payload
            }
        }
        default:
            return state
    }
}

export default sellerReducer