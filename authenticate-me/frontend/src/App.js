import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ExercisesContainer from "./components/Exercise/ExercisesContainer"
import Exercise from "./components/Exercise/Exercise"
import CreateExerciseForm from "./components/Exercise/ExerciseForm"
import Review from "./components/Review/review"
import UpdateExercise from "./components/UpdateExercise/Update"
import Homepage from "./components/SpashPage/index"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/api/exercises" exact>
            <ExercisesContainer />
          </Route>
          <Route path="/api/exercises/new" exact>
            <CreateExerciseForm />
          </Route>
          <Route path="/api/exercises/:id" exact>
            <Exercise />
            <Review />
          </Route>
          <Route path="/api/exercises/:id/edit" exact >
            <UpdateExercise />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
