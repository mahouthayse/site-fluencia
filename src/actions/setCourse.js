export const SET_LESSON = 'SET_LESSON';
export const SET_TODAY = 'SET_TODAY';

export const setLesson = lesson => ({
    type: SET_LESSON,
    lesson
});

export const setNew = today => ({
    type: SET_TODAY,
    today
});
