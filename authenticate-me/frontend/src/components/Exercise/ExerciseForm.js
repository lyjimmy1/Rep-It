import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {makeExercise} from '../../store/exercise'
import {useHistory} from 'react-router-dom'


const CreateExerciseForm=()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    // const exercises = useSelector(state => state.exercise)
    
    const [user_id, setUserId] = useState(1)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [body_region_id, setBodyTypeId]=useState(0)

    // useEffect(() => {
    //     dispatch(makeExercise());
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
           user_id, name, description, sets, reps, body_region_id
        }

        const newExercise = await dispatch(makeExercise(payload))
        if(newExercise){
            return history.push("/api/exercises")
        }
    }


    return (
        <div className ="outermost-container">
            <div className="signup-container">

                <h2>Make An Exercise!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input className="signup-input"
                        id='name'
                        placeholder='Name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required/>
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                        <textarea className="signup-input"
                        id='description'
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required/>
                    </div>
                    <div>
                        <label htmlFor='sets'>Sets</label>
                        <input className="signup-input"
                        id='sets'
                        type='number'
                        onChange={(e) => setSets(e.target.value)}
                        value={sets}
                        required/>
                    </div>
                    <div>
                        <label htmlFor='reps'>Reps</label>
                        <input className="signup-input"
                        id='reps'
                        type='number'
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                        required/>
                    </div>
                    <div>
                        <select className="signup-input" id="bodypart" onChange={(e) => setBodyTypeId(e.target.value)} required> Body Part
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
        </div>
    )
}


export default CreateExerciseForm
