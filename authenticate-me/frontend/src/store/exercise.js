import { csrfFetch } from "./csrf";
import {useParams} from 'react-router-dom'
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

export const getExercise = ()=> async(dispatch)=>{
    const {id} = useParams()
    const res = await csrfFetch(`/api/exercises/:${id}`)
    const exercise = await res.json()
    dispatch(setExercises(exercise))
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
