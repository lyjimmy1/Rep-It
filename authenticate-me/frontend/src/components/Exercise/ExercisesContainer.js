import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'
import { NavLink } from 'react-router-dom';
import './exercise.css'

const ExercisesContainer = () =>{
    const dispatch = useDispatch();
    const exercises = useSelector((state)=> Object.values(state.exercises));


    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

    return (
        <div className="exercisePage">
            <table className="exerciseTable">
                <thead className="exerciseThead">
                    <tr>
                        <th>Get your pump in!</th>
                    </tr>
                </thead>
                <tbody className="exerciseTbody">
                    {exercises.map(exercise =>
                    <NavLink to={`/api/exercises/${exercise.id}`} key={exercise.name}>{exercise.name}</NavLink>)}
                </tbody>
            </table>
        </div>
    )
}

export default ExercisesContainer;
