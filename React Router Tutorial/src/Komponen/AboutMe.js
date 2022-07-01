import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutMe = () => {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <h1>AboutMe</h1>
        <button onClick={()=> {
            navigate("/Profile")
        }} className='button-me'>
            Bact To Profile
        </button>
    </div>
  )
}

export default AboutMe
