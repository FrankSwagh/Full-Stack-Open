import personServices from "../services/person";
const Person = ({
  person,
  numbers,
  personId,
  setPersons,
  copyPersons,
  setNotificationMessage,
  setNotificationStyle,
}) => {
  const handleDeleteButton = (e) => {
    e.preventDefault();
    if (confirm(`Delete ${person} `))
      personServices
        .deletePerson(personId)
        .then(() => {
          setPersons(copyPersons.filter((person) => person.id != personId));
        })
        .catch((error) => {
            console.log(error);
          setNotificationStyle("failed");
          setNotificationMessage(
            `Information of ${person.name} has already remove from the server`
          );
          setTimeout(() => {
            setNotificationMessage(null);
          }, 3000);
        });
  };
  return (
    <>
      <p>
        {person} {numbers} <button onClick={handleDeleteButton}>delete</button>
      </p>
    </>
  );
};
export default Person;
