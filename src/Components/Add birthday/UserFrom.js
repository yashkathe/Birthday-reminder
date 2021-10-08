import React, { useState } from "react";

import styles from "./UserForm.module.css";

function UserForm(props) {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    //change handler functions

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // console.log(enteredName)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //submit handler function

    const submitHandler = (event) => {
        event.preventDefault();

        const newBday = {
            name: enteredName,
            date: new Date(enteredDate),
        }

        console.log(newBday)
    };

    return (
        <React.Fragment>
            <form className={styles.mainCard} onSubmit={submitHandler}>
                <div>
                    <h3>Add a new birthday !</h3>
                </div>
                <div className={styles.inMainCard}>
                    <label>Name of the subject </label>
                    <input
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                    ></input>
                </div>
                <div className={styles.inMainCard}>
                    <label>Birth date of the subject</label>
                    <input
                        type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    ></input>
                </div>
                <div>
                    <button>Add to list !</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default UserForm;
