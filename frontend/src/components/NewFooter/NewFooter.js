import "./NewFooter.css";

// import { Modal } from "../../context/Modal";
import { useState } from "react";

import FooterModal from "../FooterModal-tech/FooterModal"
function NewFooter() {

    const [showModal, setShowModal] = useState(false);
  return (
    <>
        {showModal && (
               <FooterModal setShowModal={setShowModal}/>
        )}

      <div className="footer-tab">
        <div className="footer-left">
          <p className="f-item">© 2022 Remotebnb, Inc</p>
          <p className="f-item">·</p>
          <a
            id="port"
            className="f-item"
            href="https://www.maicasantos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maica Santos
          </a>
          <p className="f-item">·</p>
          <a
            id="linkedin"
            className="f-item"
            href="https://www.linkedin.com/in/maicasantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <p className="f-item">·</p>
          <a
            id="github"
            className="f-item"
            href="https://github.com/itsmaica/Remotebnb"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="footer-right">
          <p className="f-item">
            <i className="fa-solid fa-globe"></i> English (US)
          </p>
          <p className="f-item">
            <i className="fa-solid fa-dollar-sign"></i> USD
          </p>
          <p onClick={() => setShowModal(true)} id="tech" className="f-item">Technologies <i className="fa-solid fa-angle-up"></i></p>
        </div>
      </div>
    </>
  );
}

export default NewFooter;
