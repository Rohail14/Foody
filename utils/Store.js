import { checkCookies, getCookie } from "cookies-next";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
    userInfo: checkCookies('userInfo')?JSON.parse(getCookie('userInfo')):null,
};

function reducer(state,action){
    switch (action.type) {
        case 'USER_LOGIN' : {
            return {...state, userInfo: action.payload };
        }
        case 'USER_LOGOUT' : {
            return {...state, userInfo:null , cart:{cartItems:[], shippingAddress:[], paymentMethod:''},}
        }
        default:
            return state;
    }
}
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = [state, dispatch];
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}