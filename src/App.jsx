import { useState, useEffect } from "react"
import { User } from "./User"

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])//if you not define as empty array you must apply line 21

    useEffect(() => {
        setIsLoading(true)

        const controller = new AbortController()
        fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
        .then(res => res.json())
        .then(setUsers)
        .finally(() => {
            setIsLoading(false)
        })

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <>
            <h1>Users List</h1>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <ul>{
                    // users != null && 
                    users.map(user => {
                    return <User key={ user.id } name={user.name} />
                    })}
                </ul>
            )}
        </>
    )
}

export default App