import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'
import { NavLink, useParams } from 'react-router-dom';

const Exercise=()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const exercises = useSelector((state)=> (state.exercises));
    // console.log(exercises)

    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

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
            </div>
        </div>
        }
        </>
    )
}

export default Exercise
