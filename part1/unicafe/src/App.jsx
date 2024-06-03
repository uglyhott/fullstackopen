import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  let startState = good == 0 && neutral == 0 && bad == 0
  const totalCollectedFeedback = good + neutral + bad
  const averageScore = (good + (bad * -1)) / totalCollectedFeedback
  const percentPositive = (good / totalCollectedFeedback) * 100

  if (startState) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={totalCollectedFeedback} />
            <StatisticLine text='average' value={averageScore} />
            <StatisticLine text='positive' value={percentPositive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

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