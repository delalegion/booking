import { createStore } from 'redux';

const initialState = {
    seats: [],
    selected: window.localStorage.getItem('selected') ?? [],
    offer: [],
    userSeats: window.localStorage.getItem('user-seats') ?? 0,
    userCheckbox: window.localStorage.getItem('user-checkbox') ?? false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "fetch-data":
            return {...state, seats: action.data};
        case "selected":
            return {...state, selected: [...state.selected, action.data]};
        case "unselected":
            return {...state, selected: state.selected.filter(item => item !== action.data)};
        case "clear":
            return {...state, selected: [] };
        case "offer":
            return {...state, offer: action.data};
        case "user-seats":
            return {...state, userSeats: action.data};
        case "user-checkbox":
            return {...state, userCheckbox: action.data};
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(()=>{
    window.localStorage.setItem('user-seats', store.getState().userSeats)
    window.localStorage.setItem('user-checkbox', store.getState().userCheckbox)
    window.localStorage.setItem('selected', store.getState().selected)
})

export default store;

