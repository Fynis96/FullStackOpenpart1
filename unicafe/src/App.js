import {useState} from 'react'

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {props.goodClick} text = "good" />
      <Button handleClick = {props.neutralClick} text = "neutral" />
      <Button handleClick = {props.badClick} text = "bad" />
    </div>
    )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0)
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given yet</p>
    </div>
    )
  else
  return (
    <div>
    <h1>Statistics</h1>
    <table>
    <tbody>
    <StatisticLine text="good" stat={good} />
    <StatisticLine text="neutral" stat={neutral} />
    <StatisticLine text="bad" stat={bad} />
    <StatisticLine text="all" stat={bad + neutral + good} />
    <StatisticLine text="average" stat={((bad * -1) + neutral + good) / 3} />
    <StatisticLine text="positive" stat={good / (bad + neutral + good) * 100}  />
    </tbody>
    </table>
    </div>
    )
}

const StatisticLine = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
    )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick = {handleClick}> 
        {text}
      </button>
    </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodIncrement = () => setGood(good + 1)
  const neutralIncrement = () => setNeutral(neutral + 1)
  const badIncrement = () => setBad(bad + 1)



  return (
    <div>
      <Feedback goodClick = {goodIncrement} neutralClick = {neutralIncrement} badClick = {badIncrement}/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App