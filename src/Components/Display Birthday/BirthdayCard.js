import React from "react";
import Card from "../UI/Card";
import BirthdayDate from "./BirthdayDate";

import styles from './BirthdayCard.module.css'

const BirthdayCard = (props) => {
    return (
        <Card className={styles.indvCard}>
                <h5>{props.name}</h5>
                <BirthdayDate date={props.date} />
                <button>delete</button>
        </Card>
    );
};

export default BirthdayCard;
