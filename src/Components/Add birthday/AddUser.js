import React from "react";
import UserForm from "./UserForm";

//UI import
import Card from "../UI/Card";

function AddUser(props) {
    const onSaveBirthday = (userData) => {
        const userDataNew = {
            ...userData
        }
        // console.log(userDataNew)
        props.onAddBirthday(userDataNew)
    }

    return (
            <Card>
                <UserForm saveBirthday={onSaveBirthday}/>
            </Card>

    );
}

export default AddUser;
