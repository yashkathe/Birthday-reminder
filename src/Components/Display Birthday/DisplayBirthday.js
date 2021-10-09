import React from "react";
import Card from "../UI/Card";
import BirthdayCard from "./BirthdayCard";

import styles from "./DisplayBirthday.module.css";

const DisplayBirthday = (props) => {
    return (
        <Card className={styles.mainCard}>
            {props.items.map((item) => (
                <BirthdayCard name={item.name} date={item.date} key={item.id}/>
            ))}
        </Card>
    );
};

export default DisplayBirthday;
