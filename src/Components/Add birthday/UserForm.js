import React, { useState } from "react";
import Card from "../UI/Card";

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
            name:enteredName,
            date:new Date(enteredDate),
            id:Math.random().toString()
        }

        setEnteredName('')
        setEnteredDate('')

        props.saveBirthday(newBday)
    };

    return (
        <Card>
            <form className={styles.mainCard} onSubmit={submitHandler}>
                <div className={styles.title}>
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
                    <label>month / day / year</label>
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
        </Card>
    );
}

export default UserForm;
