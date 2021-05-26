import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercise} from '../../store/exercise'
import { NavLink } from 'react-router-dom';

const Exercise=()=>{
    const dispatch = useDispatch();
    const exercises = useSelector((state)=> Object.values(state.exercises));

    useEffect(() => {
        dispatch(getExercise());
    }, [dispatch]);

    return(
        <div>This is my exercise
            <h1>{exercises}</h1>
        </div>
    )
}

export default Exercise
