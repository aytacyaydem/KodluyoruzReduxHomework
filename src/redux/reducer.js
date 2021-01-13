import * as actionTypes from "./actionTypes"
function reducer (state,action) {
    switch (action.type) {
        case actionTypes.ADD_CART:
            return {...state,cart:[...state.cart,action.payload]}
        case actionTypes.REMOVE_FROM_CART:
            return {...state,cart:state.cart.filter(cartItem => cartItem.id !== action.payload)}
        case actionTypes.ADD_FAVORITE:
            return {...state,favorites :[...state.favorites,action.payload] }
        case actionTypes.DELETE_FAVORITE:
            return {...state,favorites: state.favorites.filter(favorites=> favorites.id !== action.payload) }
        default:
            return state
    }
}
export default reducer