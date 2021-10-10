import React,{useState} from 'react'
import AddUser from './Components/Add birthday/AddUser';
import DisplayBirthday from './Components/Display Birthday/DisplayBirthday';

import styles from './App.module.css'

function App() {
  const[BdayDataArray, setBayDataArray] = useState([])

  const BdayDataHandler = (data) => {
    // console.log(data)
    setBayDataArray((prevData) => {
      return[...prevData, data]
    })
  }

  const deleteHandler = (deleteKey) => {
    console.log(deleteKey)
    const newData = BdayDataArray.filter((item) => {
      return (
        item.id.toString() !== deleteKey.toString()
      )
    })
    setBayDataArray(newData)
  }

    return(
      <React.Fragment>
        <div className={styles.backg}></div>
        <AddUser onAddBirthday={BdayDataHandler}/>
        <DisplayBirthday items={BdayDataArray} onDelete={deleteHandler}/>
      </React.Fragment>
    )
}

export default App;
