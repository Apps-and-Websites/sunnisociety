import React from "react";
import Modal from "react-modal";

import Login from "./login";
import Register from "./register";
import * as Styles from "../../components/styles/modalStyles";

Modal.setAppElement("#root");

export default function LoginRegisterModals({
  toggleRegisterModal,
  toggleLoginModal,
  loginModalIsOpen,
  registerModalIsOpen,
  history,
}) {
  return (
    <>
      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={toggleLoginModal}
        style={Styles.loginModalStyle}
      >
        <Login
          history={history}
          closeLoginModal={toggleLoginModal}
          toggleRegisterModal={toggleRegisterModal}
        />
      </Modal>

      <Modal
        isOpen={registerModalIsOpen}
        onRequestClose={toggleRegisterModal}
        style={Styles.registerModalStyle}
      >
        <Register history={history} toggleRegisterModal={toggleRegisterModal} />
      </Modal>
    </>
  );
}
