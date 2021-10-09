import React,{useState} from 'react'
import AddUser from './Components/Add birthday/AddUser';
import DisplayBirthday from './Components/Display Birthday/DisplayBirthday';

function App() {
  const[BdayDataArray, setBayDataArray] = useState([])

  const BdayDataHandler = (data) => {
    // console.log(data)
    setBayDataArray((prevData) => {
      return[...prevData, data]
    })
  }

    return(
      <React.Fragment>
        <AddUser onAddBirthday={BdayDataHandler}/>
        <DisplayBirthday items={BdayDataArray}/>
      </React.Fragment>
    )
}

export default App;
