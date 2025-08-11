import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all == 0) {
        return <p>No feedback given</p>
    }

    const average = (1 * good + 0 * neutral + (-1) * bad) / all 
    const positive = (good * 100) / all

    return (
        <table>
            <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={all} />
                    <StatisticLine text="average" value={average} />
                    <StatisticLine text="positive" value={positive + ' %'} />
            </tbody>
        </table>
    )     
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        console.log("good before:", good)
        const updatedGood = good + 1
        setGood(updatedGood)
        console.log("good after:", updatedGood)
    }

    const handleNeutralClick = () => {
        console.log("neutral before:", neutral)
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        console.log("neutral after:", updatedNeutral)
    }

    const handleBadClick = () => {
        console.log("bad before:", bad)
        const updatedBad = bad + 1
        setBad(updatedBad)
        console.log("bad after", updatedBad)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button onClick={handleGoodClick} text="good" />
            <Button onClick={handleNeutralClick} text="neutral" />
            <Button onClick={handleBadClick} text="neutral" />
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App