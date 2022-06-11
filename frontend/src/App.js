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
import CreateASpot from './components/Account/CreateASpot';
import EditASpot from './components/Account/EditSpot';
import Splash from './components/Splash/Splash';
import OneSpot from './components/Spots/OneSpot';
import Loading from './components/LoadingAndPageNotFound/Loading';
// import Test from './components/Test.js.bak';
import SplashSpot from './components/Spots/SplashSpot';

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
      {/* <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}

          <Route exact path='/text'>
            <Splash />
          </Route>

          <Route exact path='/Maica'>
            {/* <Test /> */}
            {/* <OneSpot/> */}
            {/* <Loading />
             */}
             <SplashSpot />
          </Route>

          <Route path='/signup'>
            <SignupFormPage />
          </Route>

          {/* See All Spots*/}
          <Route exact path='/spots'>
            <Spots />
          </Route>

          <Route exact path='/spots/:spotId'>
            <OneSpot/>
          </Route>


          {/* To Form To Edit a spot */}
          <Route exact path='/users/:userId/spots/:spotId/edit'>
            <EditASpot />
          </Route>


          {/* The Form To Create a Spot - CreateAForm Page */}
          <Route exact path='/users/:userId/spots/new'>
            <CreateASpot />
          </Route>


           {/* Goes to the page where you can see all of your spots and the button to make a new spot*/}
          <Route exact path='/users/:userId/spots'>
            <ManageSpots />
          </Route>

          {/* Splash Page */}
          <Route exact to="/">
            <Splash />
          </Route>




        </Switch>
      )}
    </>
  );
}

export default App;
