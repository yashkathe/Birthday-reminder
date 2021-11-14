import React, { useState } from "react";
import Card from "../UI/Card";
import BirthdayCard from "./BirthdayCard";
import BirthdayFilter from "./BirthdayFilter";

import styles from "./DisplayBirthday.module.css";

const DisplayBirthday = (props) => {
    // const currentDate = new Date()
    // const month = currentDate.toLocaleString("en-US", { month: "long" });

    const renderDiv = (
        <div className={styles.renderDiv}>
            No birthdays stored ? Start adding !
        </div>
    );
    const renderDiv2 = (
        <div className={styles.renderDiv}>No birthdays stored this month </div>
    );

    const [filteredMonth, setFilteredMonth] = useState("default");

    const filterChangeHandler = (selectedMonth) => {
        setFilteredMonth(selectedMonth);
    };

    const filteredMontharray = props.items.filter((item) => {
        // console.log(item.date.toLocaleString("en-US", { month: "long" }).toString())
        // console.log(filteredMonth)
        return (
            item.date.toLocaleString("en-US", { month: "long" }).toString() ===
            filteredMonth
        );
    });

    const deleteHandler = (deleteKey) => {
        props.onDelete(deleteKey);
    };

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
                <BirthdayFilter onChangeFilter={filterChangeHandler} />
            </div>
            <div className={styles.cards}>
                {filteredMonth === "default"
                    ? props.items.map((item) => (
                          <BirthdayCard
                              name={item.name}
                              date={item.date}
                              key={item.id}
                              key2={item.id}
                              onDelete={deleteHandler}
                          />
                      ))
                    : filteredMontharray.length === 0
                    ? renderDiv2
                    : filteredMontharray.map((item) => (
                          <BirthdayCard
                              name={item.name}
                              date={item.date}
                              key={item.id}
                              key2={item.id}
                              onDelete={deleteHandler}
                          />
                      ))}
            </div>
        </Card>
    );
};

export default DisplayBirthday;
