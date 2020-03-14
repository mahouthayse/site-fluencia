const INITIAL_STATE = {
    checkout: {
        user: localStorage.getItem('id'),
        name: '',
        email: '',
        password: '',
        created: new Date()
    },
    message: ''
};

export default function checkout(state = INITIAL_STATE, action){
    switch(action.type) {
        case "setName":
            return {
                ...state,
                checkout: {...state.checkout, name: action.name},
            }
        case "setEmail":
            return {
                ...state,
                checkout: {...state.checkout, email: action.email},
            }
        case "setPassword":
            return {
                ...state,
                checkout: {...state.checkout, password: action.password},
            }

        case "setPaymentMethod":
            return {
                ...state,
                checkout: {...state.checkout, paymentMethod: action.paymentMethod},
            }



        default:
            return state
    }
}