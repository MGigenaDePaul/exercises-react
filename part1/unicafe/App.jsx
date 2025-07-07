import { useState } from 'react'

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

            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

export default App