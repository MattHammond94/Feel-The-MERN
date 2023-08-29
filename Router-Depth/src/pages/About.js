import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const About = () => {
  const [user, setUser] = useState('Matty')

  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h2>About Us!</h2>
      <p>lorem</p>

      <button onClick={() => setUser(null)}>Log out</button>
    </div>
  )
}

export default About