import "./Splash.css";

// import Footer from "../Footer/Footer";
import nydigitalnomad from "../../images/nydigitalnomad.jpeg";
import modern from "../../images/modern.jpeg";
import NewFooter from "../NewFooter/NewFooter";

function Splash() {
  return (
    <>
    <div className="container">
      <div className="pic-try-hosting">
        <div id="splash-house">
          <img id="nynomad" src={nydigitalnomad} alt="remote worker" />
        </div>
        <div id="splash-host">
          <h1>Welcome To Remotebnb</h1>
          <div id="about-rem">
            <p>
              Working remotely from home has become the norm for many people in
              recent times. This shift has allowed better work-life balance,
              increased productivity, and more freedom. Remotebnb serves as a
              platform for our users to find unique homes where they can work
              from.
            </p>
          </div>
        </div>
      </div>

      <div className="try-host">
        <div id="modern">
          <img id="mod" src={modern} alt="a house" />
        </div>
        <div id="host-ad">
          <div>
            <h1>Try Hosting A Spot</h1>
          </div>
          <div id="about-rem">
            <p>
              Users can manage their spots that they would like to share with
              others and write reviews of other spots.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="splash-reviews">
        <div className="splash-reviews">
          <div id="rev-heading">
            <h2>What Guests Are Saying</h2>
          </div>

          <div id="splash-revs">
            <div className="s-rev">
              <div className="s-pic-rev">
                <img
                  className="s-r-pic"
                  src="https://remotebnb.s3.us-west-1.amazonaws.com/blue.png"
                  alt="a house"
                />
              </div>
              <div className="name-and-pic">
                <div className="splash-user">
                  <img
                    className="s-user-profile"
                    src="https://remotebnb.s3.us-west-1.amazonaws.com/Patrick_Levis.webp"
                    alt="user"
                  />
                </div>
                <div className="name-cont">
                  <h4 className="s-user-name">Jack</h4>
                </div>
              </div>
              <div className="s-rev-box">
                <p>
                  "I loved staying at this spot in Boston. The internet was
                  super fast, and the location was really convenient. I would
                  definitely work from here again."
                </p>
              </div>
            </div>

            <div className="s-rev">
              <div className="s-pic-rev">
                <img
                  className="s-r-pic"
                  src="https://remotebnb.s3.us-west-1.amazonaws.com/soholoft.png"
                  alt="a house"
                />
              </div>
              <div className="name-and-pic">
                <div className="splash-user">
                  <img
                    alt="user"
                    className="s-user-profile"
                    src="https://remotebnb.s3.us-west-1.amazonaws.com/Screen+Shot+2022-06-19+at+2.46.13+AM.png"
                  />
                </div>
                <div className="name-cont">
                  <h4 className="s-user-name">Fiona</h4>
                </div>
              </div>
              <div className="s-rev-box">
                <p>
                  "Had an awesome experience at the loft in Soho. After
                  finishing our project we were able to enjoy the downtown area.
                  Would absolutely recommend to anyone."
                </p>
              </div>
            </div>

            <div className="s-rev">
              <div className="s-pic-rev">
                <img
                  className="s-r-pic"
                  src="https://remotebnb.s3.us-west-1.amazonaws.com/hawaiicabin.png"
                  alt="a house"
                />
              </div>
              <div className="name-and-pic">
                <div className="splash-user">
                  <img
                    className="s-user-profile"
                    src="https://remotebnb.s3.us-west-1.amazonaws.com/Screen+Shot+2022-06-19+at+2.49.40+AM.png"
                    alt="user"
                  />
                </div>
                <div className="name-cont">
                  <h4 className="s-user-name">Clu</h4>
                </div>
              </div>
              <div className="s-rev-box">
                <p>
                  "Working remote from Hawaii is literally the best. Nothing
                  beats walking along the beach on your lunch break."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-foot">
        <Footer />
      </div> */}

      </div>
      <div className="new-footer">
        <NewFooter />
      </div>
    </>
  );
}
export default Splash;
