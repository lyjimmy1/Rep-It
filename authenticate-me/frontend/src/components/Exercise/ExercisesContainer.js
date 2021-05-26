import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'
import { NavLink } from 'react-router-dom';

const ExercisesContainer = () =>{
    const dispatch = useDispatch();
    const exercises = useSelector((state)=> Object.values(state.exercises));


    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

    return (
        <div className="exercisePage"> Get your pump in!
            <ul className="exerciseItems">
                {exercises.map(exercise =>
                <NavLink to={`/api/exercises/${exercise.id}`} key={exercise.name}>{exercise.name}</NavLink>)}
            </ul>
        </div>
    )
}

export default ExercisesContainer;
