import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {makeExercise} from '../../store/exercise'
import * as exerciseActions from '../../store/exercise'
import {useHistory} from 'react-router-dom'


const CreateExerciseForm=()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    // const exercises = useSelector(state => state.exercise)
    // console.log(exercises)
    const [user_id, setUserId] = useState(0)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    // useEffect(() => {
    //     dispatch(makeExercise());
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            user_id:user_id, name, description, sets, reps
        }

        const newExercise = await dispatch(makeExercise(payload))
        if(newExercise){
            return history.pushState("/api/exercises")
        }
    }


    return (
        <div> hey pls work
            <h2>Make An Exercise!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                    id='name'
                    placeholder='Name'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                    id='description'
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </div>
                <div>
                    <label htmlFor='sets'>Sets</label>
                    <input
                    id='sets'
                    type='number'
                    onChange={(e) => setSets(e.target.value)}
                    value={sets}/>
                </div>
                <div>
                    <label htmlFor='reps'>Reps</label>
                    <input
                    id='reps'
                    type='number'
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}/>
                </div>
                <div>
                    <select id="bodypart"> Body Part
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default CreateExerciseForm
