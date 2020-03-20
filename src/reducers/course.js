import {SET_LESSON, SET_TODAY} from '../actions/setCourse';

const INITIAL_STATE = {
    course: {
        lesson: [],
        today: {}
    },
    message: '',
};

export default function course(state = INITIAL_STATE, action){
    switch(action.type) {
        case SET_LESSON:
            return {
                ...state,
                course: {...state.course, lesson: action.lesson},
            }
        case SET_TODAY: 
            return {
                ...state,
                course: {...state.course, today: action.today},
            }
        default:
            return state
    }
}