import {API_FETCH, API_SUCCESS, API_FAILURE} from './ActionTypes';

fetchApi = () => {
    return{
        type : API_FETCH,
        text : 'api fetching'   
    }
}
successApi = () => {
    return{
        type : API_SUCCESS,
        text : 'api fetching'
    }
}
failedApi = () => {
    return{
        type : API_FAILURE,
        text : 'api fetching'
    }
}