import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises, getOneExercise} from '../../store/exercise'
import { NavLink, useParams } from 'react-router-dom';
import DeleteExercise from "../DeleteExercise/Delete"


const Exercise=()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const exercises = useSelector((state)=> (state.exercises));
    // const bodyRegions = useSelector((state)=>(state.bodyregions));
    // const reviews = exercises[id].Reviews
    // console.log(reviews)
    // console.log(exercises)
    useEffect(() => {
        dispatch(getExercises());
        // dispatch(getBodyRegions());
    }, [dispatch]);

    useEffect(()=>{
        dispatch(getOneExercise(id))
    }, [dispatch, id])

    return(
        <>
        {exercises[id] &&
        <div className="exercisePage">
            <div className="exerciseTable">
                <h1 className="exerciseThead">
                    {exercises[id].name}
                </h1>
                <div className="exerciseTbody">
                    {exercises[id].description}
                </div>
                <div className="exerciseSets">
                    Sets:{exercises[id].sets}
                </div>
                <div className="exerciseReps">
                    Reps:{exercises[id].reps}
                </div>
                <div className="bodyRegion">
                    Body-Type:{exercises[id].Bodyregion.body_type}
                </div>
                <div className="userName">
                    Posted-by:{exercises[id].User.username}
                </div>
                <div className="deleteDiv">
                    <DeleteExercise />
                </div>
                <div className="updateDiv">
                    <NavLink to={`/api/exercises/${id}/edit`}>Update</NavLink>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Exercise
