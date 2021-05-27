
import {useDispatch} from 'react-redux'
import {deleteExercise} from '../../store/exercise'
import { useParams, useHistory } from 'react-router-dom';



const DeleteExercise=()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();

    const deleteEvent = async(e)=>{
        e.preventDefault()

        const deletedExercise = await dispatch(deleteExercise(id))
        history.push('/')


    }



    return(
        <div>
            <form onSubmit={deleteEvent}>
                <button className="deleteButton">Delete Exercise</button>
            </form>
        </div>
    )
}

export default DeleteExercise
