import Person from "./person";
const ListPersons = ({
  filteredPerson,
  persons,
  filteredPhonebook,
  setPersons,
  copyPersons,
  setNotificationMessage,
  setNotificationStyle,
}) => {
  return filteredPerson === ""
    ? persons.map((person) => (
        <Person
          key={person.id}
          person={person.name}
          numbers={person.number}
          personId={person.id}
          copyPersons={copyPersons}
          setPersons={setPersons}
          setNotificationMessage={setNotificationMessage}
          setNotificationStyle={setNotificationStyle}
        />
      ))
    : filteredPhonebook.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ));
};

export default ListPersons;
