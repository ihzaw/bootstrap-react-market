import { GET_SELLERS_LOADING, GET_SELLERS_ERROR, GET_SELLERS } from './actionType'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const fetchSellers = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_SELLERS_LOADING,
            payload: true
        })
        dispatch({
            type: GET_SELLERS_ERROR,
            payload: true
        })
        axios.get(`${baseUrl}/sellers`)
        .then(({ data }) => {
            dispatch({
                type: GET_SELLERS,
                payload: data.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_SELLERS_ERROR,
                payload: err
            })
        })
    }
}