import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([ { name: 'Arto Hellas', id: 1 } ]) 
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length + 1
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }

    const filteredPersons = persons.filter(person => (person.name.toLowerCase() === newName.toLowerCase()) 
        ? alert(`${newName} is already added`) 
        : persons.map(person => <li key={person.id}>{person.name}</li>) // also works if i put <li key={person.id}>{person.name}</li>
    ) 

    return (
        <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        <h2>Numbers</h2>
            {filteredPersons.map(person => <li key={person.id}>{person.name}</li>)}
        </div>
    )
}

export default App