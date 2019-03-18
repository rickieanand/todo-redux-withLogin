import {API_FETCH, API_RECEIVE, API_FAILURE} from './ActionTypes'

const defaultState = {
    list: [],
    isFetching: false,
    isReceived: false,
    isFailed: false
  };
  
export default (state = defaultState, action) => {
    switch (action.type) {
        case API_FETCH:
            return {
                isFetching: true,
                isReceived: false,
                isFailed: false
            }
        case API_RECEIVE:
            return {
                list: action.payload,
                isFetching: false,
                isReceived: true,
                isFailed: false
            }
        case API_FAILURE:
            return {
                list: action.payload,
                isFetching: false,
                isReceived: false,
                isFailed: true
            }
        default:
            return state
    }
}