import React from "react";
import Card from "../UI/Card";
import BirthdayDate from "./BirthdayDate";

import styles from './BirthdayCard.module.css'

const BirthdayCard = (props) => {
    const id1 = props.key2
    const deleteHandler = () => {
        props.onDelete(id1)
    } 

    return (
        <Card className={styles.indvCard}>
                <h5>{props.name}</h5>
                <BirthdayDate date={props.date} />
                <button onClick={deleteHandler}>delete</button>
        </Card>
    );
};

export default BirthdayCard;
