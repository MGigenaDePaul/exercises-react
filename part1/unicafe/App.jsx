import { useState } from 'react'

const Total = ({good, neutral, bad}) => {
    return <p>all {good + neutral + bad}</p>
}

const Average = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if(all == 0) {
        return <p>average {all}</p>
    }
    const average = (1 * good + 0 * neutral + (-1) * bad) / all
    return <p>average {average}</p>
}

const Positive = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all == 0) {
        return <p>positive {all}%</p>
    }
    return <p>positive {(good * 100) / all}%</p>
}

const Statistics = ({good, neutral, bad}) => {
    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <Total good = {good} neutral = {neutral} bad = {bad}/>
            <Average good = {good} neutral = {neutral} bad = {bad}/>
            <Positive good = {good} neutral = {neutral} bad = {bad}/>
        </>
    )
            
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
    }

    const handleBadClick = () => {
        const updatedBad = bad + 1;
        setBad(updatedBad);
    }


    return (
        <div>
            <h1>give feedback</h1>

            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
            <h2>statistics</h2>
            <Statistics good = {good} neutral = {neutral} bad = {bad}/>
        </div>
    )
}

export default App