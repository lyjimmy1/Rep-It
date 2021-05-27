import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'
import { NavLink } from 'react-router-dom';
import './exercise.css'
import DeleteExercise from "../DeleteExercise/Delete"

const ExercisesContainer = () =>{
    const dispatch = useDispatch();
    const exercises = useSelector((state)=> Object.values(state.exercises));


    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

    return (
        <div className="exercisePage">
            <div className="exerciseTable">
                <div className="exerciseThead">
                    <div>
                        <h1>Get your pump in!</h1>
                    </div>
                </div>
                    <div className="exerciseTbody">
                        {exercises.map(exercise =>
                        <NavLink to={`/api/exercises/${exercise.id}`} key={exercise.name}>{exercise.name}</NavLink>)}
                    </div>
            </div>
        </div>
    )
}

export default ExercisesContainer;
