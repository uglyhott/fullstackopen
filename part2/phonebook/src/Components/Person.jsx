const Person = ({ person, remove }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={remove}>delete</button>
        </div>
    )
}

export default Person