import { useState } from 'react'

const Numbers = ({ persons }) => {
  return persons.map((person) => <p key={person.id}>{person.name} {person.number}</p>)
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: '39-44-5323532'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
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
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
    setNewNumber('')
  }

  const nameAlreadyExists = (name) => persons.find((person) => person.name === name) ? true : false

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App