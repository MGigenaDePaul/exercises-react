const Total = ({course}) => {
    let total = 0;
    
    for (let i = 0; i < course.parts.length; i++){
        total = total + course.parts[i].exercises
    }

    console.log("total", total)

    return (
        <b> <p>total of {total} exercises</p> </b>
    )
}

export default Total