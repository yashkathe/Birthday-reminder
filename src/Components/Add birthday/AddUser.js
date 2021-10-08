import React from "react";
import UserForm from "./UserFrom";

//UI import
import Card from "../UI/Card";

function AddUser(props) {
    const onSaveBirthday = (userData) => {
        const userDataNew = {
            ...userData
        }
        console.log(userDataNew)
        // props.onAddBirthday(userDataNew)
    }

    return (
        <React.Fragment>
            <Card>
                <UserForm saveBirthday={onSaveBirthday}/>
            </Card>
        </React.Fragment>
    );
}

export default AddUser;
