const Total = ({parts}) => {
    
    const initialValue = 0
    const total = parts.reduce((accumulator, part) => {
        console.log("what's happening", accumulator, part.exercises)

        return accumulator + part.exercises
    }, initialValue)

    return (
        <b> <p>total of {total} exercises</p> </b>
    )
}

export default Total