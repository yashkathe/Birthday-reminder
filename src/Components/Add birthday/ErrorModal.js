import React from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <Card>
            <Modal onClose={props.onCloseHandle}>
                <div className={styles.box}>
                    <h2>Error !</h2>
                    <p>Enter valid inputs</p>
                    <button onClick={props.onClick}>close</button>
                </div>
            </Modal>
        </Card>
    );
};

export default ErrorModal;
