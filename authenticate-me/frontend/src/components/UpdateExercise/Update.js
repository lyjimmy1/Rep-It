import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateExercise} from '../../store/exercise'
import { NavLink, useParams, useHistory } from 'react-router-dom';

const UpdateExercise=()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const exercises = useSelector(state => state.exercises[id])
    console.log(exercises)
    const history = useHistory();

    const [user_id, setUserId] = useState(1)
    const [name, setName] = useState(exercises.name);
    const [description, setDescription] = useState(exercises.description);
    const [sets, setSets] = useState(exercises.sets);
    const [reps, setReps] = useState(exercises.reps);
    const [body_region_id, setBodyTypeId]=useState(exercises.body_region_id)

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const payload={
            id, user_id, name, description, sets, reps, body_region_id
        }

        const updatedExercises = await dispatch(updateExercise(payload))
        if(updatedExercises){
            history.push('/')
        }
    }

    return(
        <div>
        <h2>Edit An Exercise!</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                id='name'
                placeholder='Name'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required/>
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <textarea
                id='description'
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required/>
            </div>
            <div>
                <label htmlFor='sets'>Sets</label>
                <input
                id='sets'
                type='number'
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                required/>
            </div>
            <div>
                <label htmlFor='reps'>Reps</label>
                <input
                id='reps'
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                required/>
            </div>
            <div>
                <select id="bodypart" onChange={(e) => setBodyTypeId(e.target.value)} required> Body Part
                    <option value={0}>--Pick a Body Region--</option>
                    <option value={1}>Chest</option>
                    <option value={2}>Shoulders</option>
                    <option value={3}>Arms</option>
                    <option value={4}>Legs</option>
                    <option value={5}>Accessories</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    </div>
    )

}

export default UpdateExercise
