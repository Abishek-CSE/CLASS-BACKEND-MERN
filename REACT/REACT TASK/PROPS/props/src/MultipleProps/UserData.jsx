

const UserData = (props) => {
  return (
    <div>
        <h1>{props.value}</h1>
        <button onClick={props.booknow}>book Now</button>
    </div>
  )
}

export default UserData