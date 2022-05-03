import {createStore} from "redux";

const initialState = {
    value: false
}
function reducer(state= initialState, action) {
    const newState = {...state};
    if(action.type === 'login') {
        console.log("-> you logged in");
        newState.value = true;
    }
    else if(action.type ==='logout') {
        console.log("-> you logged out")
        newState.value = false;
    }
    return newState;
}

const store = createStore(reducer);



export default store;