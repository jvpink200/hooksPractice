import React, { useState }from "react";
import './App.css';

function App() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    // update our inputData state
    setInputData((prevInput) => [...inputData, prevInput]);
    console.log("input data", inputData);
  }

  function handleSubmit(event) {
    // add the inputData to the contactsData array
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {/*{contacts}*/}
    </>
  );
}

export default App;
