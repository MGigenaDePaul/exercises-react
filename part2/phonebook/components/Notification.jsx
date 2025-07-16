const Notification = ({addMessage}) => {
    if (addMessage === null) {
        return null;
    }

    return (
        <div className='message'>
            {addMessage}
        </div>
    )
}

export default Notification