import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormPage/SignUpModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className="button" exact to="/api/exercises">Exercises</NavLink>
      <NavLink className="button" to="/api/exercises/new">Create New Exercise</NavLink>
      <ProfileButton user={sessionUser} />
     </>

      );
    } else {
      sessionLinks = (
        <>
        <LoginFormModal />
        <SignUpFormModal />
        {/* <NavLink className="button" to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div className="navBar">
      <ul >
        <li className="navItems">
          <NavLink className="button"exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
