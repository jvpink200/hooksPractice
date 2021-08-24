import React, { useState ,useEffect }from "react"; //useEffect replaces componentDidMount, componentDidUpdate, componentWillUnMount
//allows use to produce side effects ex: Network request, Manual DOM manipulation, timeouts and intervals
import './App.css';

function App() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

  function handleSubmit(event) {
    event.preventDefault();
    // add the inputData to the contactsData array
    setContactsData(prevContacts => {
      return [...prevContacts, inputData]
    })
  }

  const contacts = contactsData.map(contact => {
    return (
      <div key={contact.firstName}>
        <h2>{contact.firstName}</h2>
        <p>{contact.lastName}</p>
      </div>
    );
  })
  return (
    <React.Fragment>
      <p></p>
      <form onSubmit={handleSubmit} className="App">
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
      {contacts}
    </React.Fragment>
  );
}

export default App;
