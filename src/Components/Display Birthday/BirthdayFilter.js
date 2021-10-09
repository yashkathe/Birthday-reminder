import React from "react";

import styles from './Birthdayfilter.module.css'

const BirthdayFilter = (props) => {
    return (
        <div className={styles.filter}>
            <div className={styles.label}>
                <label>Filter by month</label>
            </div>
            <div>
                <select>
                    <option>Month</option>
                    <option>Januray</option>
                    <option>Februray</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
        </div>
    );
};

export default BirthdayFilter;
