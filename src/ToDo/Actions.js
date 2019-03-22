import { API_FETCH, API_RECEIVE, API_FAILURE, CREATE_ITEM, DELETE_ITEM } from './ActionTypes';

export const fetchAPI = () => ({
    type: API_FETCH,
    payload: 'result_of_fetching'
})

export const receiveAPI = (data) => ({
    type: API_RECEIVE,
    payload: data
})

export const failureApi = (error) => ({
    type: API_FAILURE,
    payload: error
})

export const createItem = task => ({
    type: CREATE_ITEM,
    payload: task
})

export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id
})
