import { useState } from 'react'

const Numbers = ({ persons }) => {
  return persons.map((person) => <p key={person.id}>{person.name}</p>)
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (nameAlreadyExists(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
  }

  const nameAlreadyExists = (name) => persons.find((person) => person.name === name) ? true : false

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
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