import { useState } from 'react'

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')

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
      setPersons(persons.concat(newPerson))
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
      <div>filter shown with: <input value={filter} onChange={handleFilterInputChange} /></div>
      <h2>add a new</h2>
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
      {filterList.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App