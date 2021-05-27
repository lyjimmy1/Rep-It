import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../store/exercise'
import { useParams } from 'react-router-dom';

const Review=()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const exercises = useSelector((state)=> (state.exercises));
    // const reviews = exercises[id].Reviews
    // const users = exercises[id].User
    // console.log(reviews)

    useEffect(() => {
        dispatch(getExercises());
        // dispatch(getBodyRegions());
    }, [dispatch]);

    return(
        <>
        {exercises[id] &&
        <div className="exercisePage">
            <div className="exerciseTable">
                <h2>Reviews from Other Users!</h2>
                <div className="reviews">
                    {exercises[id].Reviews.map(review=>
                        <p>{exercises[id].User.username}: {review.comments}, @ {review.createdAt}</p>)}
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default Review
