import { csrfFetch } from "./csrf";
//define action types as constants
const SET_EXERCISES = 'exercises/SET_EXERCISES'
const ADD_EXERCISE = 'exercise/ADD_EXERCISE'
const REMOVE_EXERCISE = 'exercise/REMOVE_EXERCISE'
const UPDATE_EXERCISE = 'exercise/UPDATE_EXERCISE'
//define action creators
const setExercises = (exercises) => ({
    type: SET_EXERCISES,
    exercises,
});

const addExercise = (exercise) => ({
    type: ADD_EXERCISE,
    exercise,
});

const removeExercise = (id) => ({
    type: REMOVE_EXERCISE,
    id,
});

const updateOne = (exercise)=>({
    type: UPDATE_EXERCISE,
    exercise
})

//define thunks
export const getExercises = () => async (dispatch) => {
    const res = await csrfFetch('/api/exercises');
    const exercises = await res.json();

    dispatch(setExercises(exercises));
}

export const getOneExercise = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/exercises/${id}`);
    const exercise = await res.json();

    dispatch(addExercise(exercise));
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
        // res.send(newExercise)
        dispatch(addExercise(newExercise))
        return newExercise.exercise
    }
}

export const deleteExercise = (id) =>async (dispatch) =>{
    const res= await csrfFetch(`/api/exercises/${id}`, {
        method: 'DELETE',
    });
    if(res.ok){
        const exercise= await res.json();
        dispatch(removeExercise(exercise.id))
    }
}

export const updateExercise = (data) =>async(dispatch) =>{

    const res = await csrfFetch(`/api/exercises/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok){
        const exercise = await res.json()

        dispatch(updateOne(exercise))
        return exercise
    }
}

// export const getExercise = ()=> async(dispatch)=>{
//     const {id} = useParams()
//     const res = await csrfFetch(`/api/exercises/:${id}`)
//     const exercise = await res.json()
//
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
            return newState;
        }
        case ADD_EXERCISE:{
            return{
                ...state,
               [action.exercise.id]: action.exercise
            }
        };
        case REMOVE_EXERCISE: {
            const removedExercise = {...state}
            delete removedExercise[action.id]
            return removedExercise;
        }
        case UPDATE_EXERCISE:{
            return{
                ...state,
                [action.exercise.id]: action.exercise,
            }
        }
        default:
            return state;
    }
}
//export the reducer
export default exerciseReducer;
