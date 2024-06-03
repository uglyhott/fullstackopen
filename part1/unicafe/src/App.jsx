import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const startState = good == 0 && neutral == 0 && bad == 0
  const totalCollectedFeedback = good + neutral + bad
  const averageScore = (good + (bad * -1)) / totalCollectedFeedback
  const percentPositive = (good / totalCollectedFeedback) * 100

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalCollectedFeedback}</p>
      <p>average {startState ? 0 : averageScore}</p>
      <p>positive {startState ? 0 : percentPositive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App