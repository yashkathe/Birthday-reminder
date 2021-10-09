import React from "react";
import Card from "../UI/Card";
import BirthdayCard from "./BirthdayCard";
import BirthdayFilter from "./BirthdayFilter";

import styles from "./DisplayBirthday.module.css";

const DisplayBirthday = (props) => {
    return (
        <Card className={styles.mainCard}>
            <div className={styles.title}>
                {props.items.length === 0 ? (
                    <h3>No Birthdays found</h3>
                ) : (
                    <h3>Birthdays you stored:</h3>
                )}
            </div>
            <div>
                <BirthdayFilter />
            </div>
            <div className={styles.cards}>
                {props.items.map((item) => (
                    <BirthdayCard
                        name={item.name}
                        date={item.date}
                        key={item.id}
                    />
                ))}
            </div>
        </Card>
    );
};

export default DisplayBirthday;
