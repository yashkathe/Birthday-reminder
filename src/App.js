import React, { useState, useEffect } from "react";
import AddUser from "./Components/Add birthday/AddUser";
import DisplayBirthday from "./Components/Display Birthday/DisplayBirthday";
import ErrorModal from "./Components/Add birthday/ErrorModal";

const App = () => {

    const [BdayDataArray, setBayDataArray] = useState([]);

    const [invalidInput, setInvalidInput] = useState(false);

    // useEffect(() => {
    //   if(localStorage.getItem('dataList') === null){
    //     localStorage.setItem('dataList', JSON.stringify(BdayDataArray))
    //   }
    // },[])

    useEffect(() => {
      localStorage.setItem('dataList', JSON.stringify(BdayDataArray))
    },
    [BdayDataArray])
  

    const BdayDataHandler = (data) => {
        if (
            data.name.trim() === "" ||
            data.date.toString() === "Invalid Date"
        ) {
            setInvalidInput(true);
        } else {
            setBayDataArray((prevData) => {
                return [...prevData, data];
            });
        }
    };

    const deleteHandler = (deleteKey) => {
        console.log(deleteKey);
        const newData = BdayDataArray.filter((item) => {
            return item.id.toString() !== deleteKey.toString();
        });
        setBayDataArray(newData);
    };

    const backdropHandler = () => {
        setInvalidInput(false);
    };

    return (
        <React.Fragment>
            <AddUser onAddBirthday={BdayDataHandler} />
            {invalidInput ? (
                <ErrorModal onCloseHandle={backdropHandler} onClick={backdropHandler}/>
            ) : (
                <DisplayBirthday
                    items={BdayDataArray}
                    onDelete={deleteHandler}
                />
            )}
        </React.Fragment>
    );
}

export default App;
