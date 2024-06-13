const Notification = ({ message, isError }) => {
    return message
        ? <div className={isError ? 'error' : 'notification'}>
            {message}
        </div>
        : null
}
export default Notification