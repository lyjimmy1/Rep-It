import { csrfFetch } from "./csrf";
import {useParams} from 'react-router-dom'
//define action types as constants
const SET_EXERCISES = 'exercises/SET_EXERCISES'
const ADD_EXERCISE = 'exercise/ADD_EXERCISE'
//define action creators
const setExercises = (exercises) => ({
    type: SET_EXERCISES,
    exercises,
});

const addExercise = (exercise) => ({
    type: ADD_EXERCISE,
    exercise,
});
//define thunks
export const getExercises = () => async (dispatch) => {
    const res = await csrfFetch('/api/exercises');
    const exercises = await res.json();
    // console.log(exercises)
    dispatch(setExercises(exercises));
}

export const makeExercise =(exercise)=>async (dispatch) =>{
    const res = await csrfFetch('/api/exercises', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exercise)
    })
    if(res.ok){
        const newExercise = await res.json()
        dispatch(addExercise(newExercise))
        return newExercise
    }
}

// export const getExercise = ()=> async(dispatch)=>{
//     const {id} = useParams()
//     const res = await csrfFetch(`/api/exercises/:${id}`)
//     const exercise = await res.json()
//     console.log(exercise)
//     dispatch(setExercise(exercise))
// }
//define an initial state
const initialState = {}
//define a rootReducer
const exerciseReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_EXERCISES:{
            const newState ={...state};
            action.exercises.forEach((exercise) =>{
                newState[exercise.id] = exercise;
            });
            return {
                ...newState,
                ...state};
        }
        case ADD_EXERCISE:{
            console.log(action.exercise)
            return{
                ...state,
                exercises: [...state.exercises, action.exercise]
            }
        }
        default:
            return state;
    }
}
//export the reducer
export default exerciseReducer;
