import "./FooterModal.css";

function FooterModal({ setShowModal }) {
  return (
    <>
      <div className="tech-div">
        <div id="close-tech">
          <div onClick={() => setShowModal(false)} id="close-bg">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="tech-rows">
          <div className="t-row">
            <h4>Support</h4>
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Node.js</p>
          </div>

          <div className="t-row">
            <h4>Community</h4>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>React</p>
            <p>Redux</p>
          </div>

          <div className="t-row">
            <h4>Hosting</h4>
            <p>Heroku</p>
            <p>Postman</p>
          </div>

          <div className="t-row">
            <h4>Remotebnb</h4>
            <p>
              <a
                id="port"
                className="f-item"
                href="https://www.maicasantos.com"
                target="_blank"
              >
                Maica Santos
              </a>
            </p>
            <p>
              <a
                id="linkedin"
                className="f-item"
                href="https://www.linkedin.com/in/maicasantos/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
            <p>
              <a
                id="github"
                className="f-item"
                href="https://github.com/itsmaica/Remotebnb"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterModal;
