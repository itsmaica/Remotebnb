import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import "./LoginFormModal.css"

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  console.log(" SHOW MODAL \n\n", showModal)

  // useEffect(() => {
  //   setShowModal(false)
  //   console.log("CHECK")
  // }, [showModal])

  return (
    <>
      <button id="pl" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
