import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import Loading from "../LoadingAndPageNotFound/Loading";
import SignupFormPage from "../SignupFormPage/index";

import airbnblogo from "../../images/airbnblogo.png";
import { useHistory } from "react-router-dom";

function LoginForm({ setShowModal }) {
  const history=useHistory();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [signUp, setSignup] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    ).then(()=>history.push(`/spots`))
  };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setShowModal(false);
  // };



  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
      {!signUp && (
        <>
        <div className="container-l">
          <div id="top">
            {/* <div id="din">
              <i onClick={closeModal} className="fa-solid fa-xmark"></i>
            </div> */}
            <div id="djarin">
              <h3>Log in or sign up</h3>
            </div>
          </div>

          <div className="line"></div>
          <div id="wel">
            <h2>Welcome to Remotebnb</h2>
          </div>
          <div id="log-con">
            <form id="log-f" onSubmit={handleSubmit}>
              {errors && (
                <div className="errors-div">
                  <ul>
                    {errors.map((error, idx) => (
                      <li className="l-s-e" key={idx}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div id="input-div">
                <input
                  className="in-log"
                  placeholder="Username or Email"
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  // required
                />
                <input
                  className="in-log"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                />
              </div>
              <button id="l-button" type="submit">
                Continue
              </button>
            </form>
            <div className="divider">
              <div className="line2"></div>
              <div>or</div>
              <div className="line2"></div>
            </div>
            <div id="sign-up-button-div">
              <div id="logo-d">
                <img id="logo" src={airbnblogo} alt="logo"/>
              </div>
              <button id="signup-button" onClick={()=>setSignup(true)}>
                Sign up
              </button>
            </div>
            {/* <p>Explore Remotebnb before making an account</p> */}
            {/* <div id='l-bt-dv'>
              <button id='demo-button'onClick={demoUser}>Demo Login</button>
            </div> */}
          </div>
        </div>
        </>
      )}
        {signUp && (
          <SignupFormPage setShowModal={setShowModal}/>
        )}
      </>
    );
  }
}

export default LoginForm;
