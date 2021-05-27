import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ExercisesContainer from "./components/Exercise/ExercisesContainer"
import Exercise from "./components/Exercise/Exercise"
import CreateExerciseForm from "./components/Exercise/ExerciseForm"

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
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
