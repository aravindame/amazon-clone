export const initialState = {
    basket: [],
    user: null
}

export const actionTypes = {
    ADD_TO_BASKET : 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    SET_USER: 'SET_USER'
}

export default function reducer(state, action){
    switch(action.type){
        case actionTypes.SET_USER: {
            return {
                ...state,
                user: action.user
            };
        }
        case actionTypes.ADD_TO_BASKET: {
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        }
        case actionTypes.REMOVE_FROM_BASKET: {
            let basket = [...state.basket];
            const index = basket.findIndex(item=>item.id===action.id);
            basket.splice(index, 1);
            return {
                ...state,
                basket
            };
        }
        default:{
            return state;
        }
    }
}