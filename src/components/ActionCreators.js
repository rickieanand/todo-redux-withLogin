import {API_FETCH, API_SUCCESS, API_FAILURE} from './ActionTypes'
// import {fetchApi} from 
export function callApi (text) {

    // axios.get('https://api.myjson.com/bins/1eud9a')
    // .then(response => {
    //   const data = response.data.results;
    //   this.setState({ data })
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    return {
      type: API_FETCH,
      text
    }
  }
  export function successApi (text) {
    return {
      type: API_SUCCESS,
      text
    }
  }
  export function failedApi (text) {
    return {
      type: API_FAILURE,
      text
    }
  }
