import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

//overlay
const ModalOverlay = (props) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

// backdrop
const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onBackdropClick}></div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onBackdropClick={props.onClose}></Backdrop>,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
