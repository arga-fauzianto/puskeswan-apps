import { legacy_createStore as createStore } from "redux";


const initialState = {
    loading: false,
    name: 'fatur swastyani',
    address: 'tangerang'
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: action.value
        }
    }  
}

const store = createStore(reducer);

export default store;