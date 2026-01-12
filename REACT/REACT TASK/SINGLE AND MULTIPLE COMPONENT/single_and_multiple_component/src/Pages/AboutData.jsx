import { useEffect, useState } from "react"
import UserData from "../Components/UserData"

const AboutData = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const datafetch = await fetch("https://dummyjson.com/users")
                if (!datafetch.ok) throw new Error('Failed to fetch')
                const changedata = await datafetch.json()
                setUser(changedata.users)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchdata()
    }, [])
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
        <div>
            <UserData senddata={user} />
        </div>
    )
}
export default AboutData