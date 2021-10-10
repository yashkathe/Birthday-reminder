import React from "react";

import styles from './Birthdayfilter.module.css'

const BirthdayFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className={styles.filter}>
            <div className={styles.label}>
                <label>Filter by month</label>
            </div>
            <div>
                <select onChange={dropdownChangeHandler}>
                    <option value="default">Display all</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
        </div>
    );
};

export default BirthdayFilter;
