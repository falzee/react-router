import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const {username} = useParams()
    return (
    <div  className='home'>
        <h1>Welcome,{username}!</h1>
        <button onClick={()=> {
            navigate("/AboutMe")
        }}>
            About Me!
        </button>
    </div>
    )
}

export default Profile