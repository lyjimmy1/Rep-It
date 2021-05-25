import { csrfFetch } from "./csrf";

//define action types as constants
const SET_EXERCISES = 'exercises/SET_EXERCISES'

//define action creators
const setExercises = (exercises) => ({
    type: SET_EXERCISES,
    exercises,
});
//define thunks
export const getExercises = () => async (dispatch) => {
    const res = await csrfFetch('/api/exercises');
    const exercises = await res.json();
    // console.log(exercises)
    dispatch(setExercises(exercises));
}
//define an initial state
const initialState = {}
//define a rootReducer
const exerciseReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_EXERCISES:
            const newState ={...state};
            action.exercises.forEach((exercise) =>{
                newState[exercise.id] = exercise;
            });
            return newState;
        default:
            return state;
    }
}
//export the reducer
export default exerciseReducer;
