const SeachPerson = ({
  copyPersons,
  filteredPerson,
  setFilteredPhonebook,
  setFilteredPerson,
}) => {
  const seachPerson = () => {
    let filteredNames = [];
    filteredNames = copyPersons.filter(
      (person) =>
        person.name.includes(filteredPerson) ||
        person.name.includes(filteredPerson.toLowerCase()) ||
        person.name.includes(filteredPerson.toUpperCase())
    );
    setFilteredPhonebook(filteredNames);
  };

  const handleSearchedPerson = (event) => {
    event.preventDefault();
    setFilteredPerson(event.target.value);
  };

  return (
    <form onChange={seachPerson}>
      <div>
        filter show with
        <input
          type="text"
          value={filteredPerson}
          onChange={handleSearchedPerson}
        />
      </div>
    </form>
  );
};

export default SeachPerson;
