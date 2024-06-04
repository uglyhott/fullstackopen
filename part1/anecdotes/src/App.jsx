import { useState } from 'react'

const MostVoted = (props) => {
  const startState = props.points.reduce((a, b) => a + b)
  let index = 0
  let votes = 0
  for (let i = 0; i < props.points.length; i++) {
    if (props.points[i] >= props.points[index]) {
      votes = props.points[i]
      index = i;
    }
  }


  if (startState == 0) {
    return <p>No votes placed.</p>
  } else {

    return (
      <>
        <p>{props.anecdotes[index]}</p>
        <p>has {votes} votes.</p>
      </>
    )
  }
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const handleRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleRandomChoice} text='next anecdote' />
      <h1>Anecdote with the most votes</h1>
      <MostVoted points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App