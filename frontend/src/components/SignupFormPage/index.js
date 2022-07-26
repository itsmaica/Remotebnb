import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
// import Loading from "../LoadingAndPageNotFound/Loading"

function SignupFormPage({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  if (sessionUser) return <Redirect to="/spots" />;

  // useEffect(()=> {
  //   setIsLoaded(true);
  // }, [isLoaded])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          firstName,
          lastName,
          username,
          email,
          password
        })
      ).catch(async (res) => {
        const data = await res.json();
        // console.log("What is data?\n\n", data)
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field"
    ]);
  };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setShowModal(false);
  // };

  const demoUser = async (e) => {
    e.preventDefault();
    const credential = "demo@user.io";
    const password = "password";

    const data = await dispatch(sessionActions.login({ credential, password }));
    // .then(() => );

    if (data) {
      setErrors(data);
    }
    // history.push(`/spots`)
    history.push(`/spots`);
  };

  // if (!isLoaded) {
  //   return <Loading />
  // } else {
  return (
    <>
      <div className="container-l-m2">
        <div id="test-a">
          <div id="top2">
            {/* <div id="din2">
            <i onClick={closeModal} className="fa-solid fa-xmark"></i>
          </div> */}
            <div id="djarin2">
              <h3>Log in or sign up</h3>
            </div>
          </div>
          {/* the line */}
          <div className="line3"></div>

          <div id="wel2">
            <h2>Welcome to Remotebnb</h2>
          </div>

          {/* log-con is a big div */}
          <div id="log-con2">
            <form id="log-f" onSubmit={handleSubmit}>
              {errors && (
                <div>
                  <ul>
                    {errors.map((error, idx) => (
                      <li className="l-s-e" key={idx}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="signup-input-border">
                <input
                  className="signup-inputs"
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  // className="in-log"
                />

                <input
                  className="signup-inputs"
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  // className="in-log"
                />

                <input
                  placeholder="Email Address"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // className="in-log"
                  className="signup-inputs"
                />

                <input
                  // className="in-log"
                  className="signup-inputs"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // required
                />

                <input
                  // className="in-log"
                  className="signup-inputs"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                />

                <input
                  // className="in-log"
                  className="signup-inputs"
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // required
                />
              </div>

              <button id="l-button" type="submit">
                Sign Up
              </button>
            </form>

            <div className="divider">
              <div className="line2"></div>
              <div>or</div>
              <div className="line2"></div>
            </div>

            <p>Explore Remotebnb before making an account</p>
            <div id="l-bt-dv">
              <button id="demo-button" onClick={demoUser}>
                Demo Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
