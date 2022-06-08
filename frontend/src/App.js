import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import Spots from './components/Spots/Spots';
import ManageSpots from './components/Account/ManageSpots';
import CreateASpot from './components/Account/UserSpots/CreateASpot';



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}

          <Route exact path='/test'>
          </Route>

           {/* Goes to the page where you can see all of your spots and the button to make a new spot*/}
          <Route exact path='/:userId/spots'>
            <ManageSpots />
          </Route>

          {/* The Form To Create a Spot - CreateAForm Page */}
          <Route exact path='/:userId/spots/new'>
            <CreateASpot />
          </Route>

          <Route path='/signup'>
            <SignupFormPage />
          </Route>

          {/* See All Spots*/}
          <Route path='/'>
            <Spots />
          </Route>


        </Switch>
      )}
    </>
  );
}

export default App;
