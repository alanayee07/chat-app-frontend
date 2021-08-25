import React, {useState} from 'react'
import JoinRoom from './JoinRoom'

const Login = () => {

  const [username, setUsername] = useState('');

  return (
    <>
    <div className="username-input">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button>
          Set Username
        </button>
    </div>
    <JoinRoom />
    </>
  )
}

export default Login