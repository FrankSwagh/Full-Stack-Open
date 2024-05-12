import { useState, useEffect } from "react";
import AddPerson from "./components/addPErson";
import SeachPerson from "./components/searchPerson";
import ListPersons from "./components/ListPersons";
import personServices from "./services/person";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPhonebook, setFilteredPhonebook] = useState("");
  const [filteredPerson, setFilteredPerson] = useState("");
  const copyPersons = [...persons];
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState("")

  useEffect(() => {
    personServices
      .getAllPersons()
      .then((initialPhonebook) => setPersons(initialPhonebook));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} notificationStyle={notificationStyle}/>
      <section>
        <SeachPerson
          copyPersons={copyPersons}
          filteredPerson={filteredPerson}
          setFilteredPerson={setFilteredPerson}
          setFilteredPhonebook={setFilteredPhonebook}
        />
      </section>
      <section>
        <h3>Add a new</h3>
        <AddPerson
          setPersons={setPersons}
          copyPersons={copyPersons}
          setNotificationMessage={setNotificationMessage}
          setNotificationStyle={setNotificationStyle}
        />
        <h2>Numbers</h2>
        <ListPersons
          filteredPerson={filteredPerson}
          persons={persons}
          filteredPhonebook={filteredPhonebook}
          copyPersons={copyPersons}
          setPersons={setPersons}
          setNotificationMessage={setNotificationMessage}
          setNotificationStyle={setNotificationStyle}
        />
      </section>
    </div>
  );
};

export default App;
