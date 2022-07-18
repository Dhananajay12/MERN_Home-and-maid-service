const USER_UPDATE_REQUEST = " USER_UPDATE_REQUEST";
const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
const USER_UPDATE_FAIL = "USER_UPDATE_FAIL";

export const initialState = {

    isLoading: false,

}


export const reducer = (state, action) => {

    if (action.type === "USER") {
        return action.payload;
    }
    if (action.type === "admin") {
      return action.payload;
  }
    return state;
}




export const userUpdateReducer = (state ={}, action) => {

    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false , userInfo : action.payload , success:true};
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
      default:
          return state;


    }
}

export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_FROM_CART":
        return {
        
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };

      default:
        return state;
    }
  };