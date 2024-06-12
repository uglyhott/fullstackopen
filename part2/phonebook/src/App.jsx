import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Person from './Components/Person'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(personsList => {
        setPersons(personsList)
      })
  }, [])

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInputChange = (event) => {
    const inputString = event.target.value
    inputString === '' ? setShowAll(true) : setShowAll(false)
    setFilter(inputString)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (nameAlreadyExists(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      personService
        .create(newPerson)
        .then(addedPerson => setPersons(persons.concat(newPerson)))
    }

    setNewName('')
    setNewNumber('')
  }

  const nameAlreadyExists = (name) => persons.find((person) => person.name === name) ? true : false

  const filterList = showAll
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterInputChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={handleFormSubmit}
        name={newName}
        onNameInputChange={handleNameInputChange}
        number={newNumber}
        onNumberInputChange={handleNumberInputChange}
      />
      <h3>Numbers</h3>
      {filterList.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App