import { useState, useEffect } from "react"
import { User } from "./User"

function App() {
    const [users, setUsers] = useState([])//if you not define as empty array you must apply line 17

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(setUsers)
    })

    return (
        <>
            <h1>Users List</h1>
            <ul>{
                // users != null && 
                users.map(user => {
                return <User name={user.name} />
            })}
            </ul>
        </>
    )
}

export default App