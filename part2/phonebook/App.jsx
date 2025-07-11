import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([ { name: 'Arto Hellas', number: '39-44-53235323', id: 1 } ]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }


    const filteredPersons = persons.filter(person => (person.name.toLowerCase() === newName.toLowerCase()) 
        ? alert(`${newName} is already added`) 
        : persons.map(person => <li key={person.id}>{person.name}</li>) // also works if i put <li key={person.id}>{person.name}</li>
    )

    return (
        <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div><button type="submit">add</button></div>
        </form>
        <h2>Numbers</h2>
            {filteredPersons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </div>
    )
}

export default App