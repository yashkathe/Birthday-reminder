import React from "react";
import UserForm from "./UserFrom";

// import styles from "./AddUser.module.css";


//UI import
import Card from "../UI/Card";

const submitHandler = (event) => {
event.preventDefault()
}

function AddUser() {
    return (
        <React.Fragment>
            <Card>
                <UserForm/>
            </Card>
        </React.Fragment>
    );
}

export default AddUser;
