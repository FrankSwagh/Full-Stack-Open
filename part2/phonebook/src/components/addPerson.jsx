import { useState } from "react";
import personServices from "../services/person";

const AddPerson = ({
  copyPersons,
  setPersons,
  setNotificationMessage,
  setNotificationStyle,
}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    copyPersons.find((person) => person.name === newName)
      ? nameValidation(newName, personObject)
      : personServices
          .createNewPerson(personObject)
          .then((response) => {
            setPersons(copyPersons.concat(response));
            setNotificationStyle("successful");
            setNotificationMessage(` ${newName} is added to phonebook`);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            setNotificationStyle("failed");
            setNotificationMessage(`${newName} failed to added to phonebook`);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
          });

    clearInput();
  };

  const nameValidation = (newName, personObject) => {
    if (
      window.confirm(
        ` is alreay on the phonebook, replace the old number with a new one?`
      )
    ) {
      const person = copyPersons.find((person) => person.name === newName);
      personServices.updatePerson(person.id, personObject).then((response) => {
        setPersons(
          copyPersons.map((person) =>
            person.id === response.id ? response : person
          )
        );
        setNotificationStyle("successful");
        setNotificationMessage(`${newName} updated his phone number`);
        setTimeout(() => {
          setNotificationStyle("");
          setNotificationMessage(null);
        }, 3000);
      });

      clearInput();
    }
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const clearInput = () => {
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} type="text" />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} type="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPerson;
