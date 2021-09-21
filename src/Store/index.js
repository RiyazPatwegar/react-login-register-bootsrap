import { createStore } from 'redux';

let initialLoginSate = localStorage.getItem('isLoggedIn');
console.log('****');
console.log(initialLoginSate);
if (initialLoginSate === 'false') {
    initialLoginSate  = false;
}

const AuthReducer = (state = {isLoggedIn : !!initialLoginSate, userDetails : []} , action) => {

    if (action.type && action.type === 'login') {
        localStorage.setItem('isLoggedIn', true);
        state.isLoggedIn = true;
        return {
            isLoggedIn: true,
            userDetails: action.value
        }
    }

    if (action.type && action.type === 'logout') {
        localStorage.setItem('isLoggedIn', false);
        state.isLoggedIn = false;
        return {
            isLoggedIn: false,
            userDetails: []
        }
    }

    return state;
}

const store = createStore(AuthReducer);

export default store;