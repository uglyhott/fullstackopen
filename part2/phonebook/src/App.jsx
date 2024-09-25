import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Person from './Components/Person'
import Notification from './Components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

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
    const personAlreadyExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
    if (personAlreadyExists) {
      if (window.confirm(`${newName} already exists, update old number with the new one?`)) {
        const newPerson = { ...personAlreadyExists, number: newNumber }
        personService
          .update(personAlreadyExists.id, newPerson)
          .then(updatedPerson => {
            setMessage(`Updated ${newPerson.name}`)
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
          })
          .catch(error => {
            setError(true)
            setMessage(error.response.data.error)
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService
        .create(newPerson)
        .then(addedPerson => {
          setMessage(`Added ${newPerson.name}`)
          setPersons(persons.concat(addedPerson))
        })
        .catch(error => {
          setError(true)
          setMessage(error.response.data.error)
        })

    }
    setTimeout(() => {
      setMessage(null)
      setError(false)
    }, 5000)

    setNewName('')
    setNewNumber('')
  }

  const handleRemove = (toRemove) => {
    if (window.confirm(`Delete ${toRemove.name}?`)) {
      personService
        .remove(toRemove.id)
        .then(response => {
          setMessage(`Deleted ${toRemove.name}`)
          setPersons(persons.filter(person => person.id !== toRemove.id))
        })
        .catch(error => {
          setError(true)
          setMessage(`Information of ${toRemove.name} has already been removed from the server`)
          setPersons(persons.filter(person => person.id !== toRemove.id))
        })
    }
    setTimeout(() => {
      setMessage(null)
      setError(false)
    }, 5000)
  }

  const filterList = showAll
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={error} />
      <Filter filter={filter} handleChange={handleFilterInputChange} />
      <h3>Add new</h3>
      <PersonForm
        onSubmit={handleFormSubmit}
        name={newName}
        onNameInputChange={handleNameInputChange}
        number={newNumber}
        onNumberInputChange={handleNumberInputChange}
      />
      <h3>Numbers</h3>
      <div className="personList">
        {filterList.map(person =>
          <Person
            key={person.id}
            person={person}
            remove={() => handleRemove(person)} />
        )}
      </div>
    </div>
  )
}

export default App