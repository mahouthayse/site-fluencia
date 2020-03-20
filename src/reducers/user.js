const INITIAL_STATE = {
    user: {
        user: localStorage.getItem('id'),
        email: '',
        password: '',
        created: new Date()
    },
    message: '',
};

export default function user(state = INITIAL_STATE, action){
    switch(action.type) {
        case "setEmail":
            return {
                ...state,
                user: {...state.user, email: action.email},
            }
        case "setPassword":
            return {
                ...state,
                user: {...state.user, password: action.password},
            }

        

        default:
            return state
    }
}