const PersonForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input value={props.name} onChange={props.onNameInputChange} />
            </div>
            <div>number: <input value={props.number} onChange={props.onNumberInputChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm