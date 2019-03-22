import { fetchAPI, receiveAPI, failureApi } from './Actions'

export const getData = () => {
    return fetchAPI()
}

export const receiveData = (data) => {
    return receiveAPI(data)
}

export const failedData = (data) => {
    return failureApi(data)
}
