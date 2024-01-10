const initialState = {
    cartProducts: []
}

const removeCart = (state = initialState, action) => {
    switch(action.type){
        case "REMOVE_TO_CART":
            return {
                cartProducts: []
            }
            default:
                return state
    }
}

export default removeCart