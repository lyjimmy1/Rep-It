// import { csrfFetch } from "./csrf";


// const SET_BODYREGIONS = 'bodyregions/SET_BODYREGIONS'

// const setBodyRegions = (bodyregions) => ({
//     type: SET_BODYREGIONS,
//     bodyregions,
// });

// export const getBodyRegions = () => async (dispatch) => {
//     const res = await csrfFetch('/api/exercises');
//     const bodyregions = await res.json();
//     console.log(bodyregions)
//     dispatch(setBodyRegions(bodyregions));
// };

// const initialState = {};

// const bodyRegionReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case SET_BODYREGIONS:{
//             const newState ={...state};
//             action.bodyregions.forEach((bodyregion) =>{
//                 newState[bodyregion.id] = bodyregion;
//             });
//             return newState
//         };

//             default:
//                 return state;
//         }
// }
// export default bodyRegionReducer
