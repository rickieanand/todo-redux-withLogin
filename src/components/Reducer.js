const initialState= {
    isFetching : false,
    isSuccess : false,
    isFailed : false,
}

function addReducer (state = initialState, action){
    switch(action.type){
        case 'API_FETCH' : 
            return {
                ...state,
                isFetching: true,
            };
        case 'API_SUCCESS' :
            return {
                ...state,
                isFetching: false,
                isSuccess: true
            };
        case 'API_FAILURE' : 
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                isFailed: true
            };
            default : return {...state}
    }
}

export default addReducer;