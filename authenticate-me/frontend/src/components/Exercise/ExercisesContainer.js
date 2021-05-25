import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'

const ExercisesContainer = () =>{
    const dispatch = useDispatch();
    const exercises = useSelector((state)=> Object.values(state.exercises));


    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

    return (
        <div> Get your pump in!
            <ul>
                {exercises.map(exercise =>
                <li key={exercise.name}>{exercise.name}</li>)}
            </ul>
        </div>
    )
}

export default ExercisesContainer;
