import React, {useState} from 'react'
import JoinRoom from './JoinRoom'

import './css/Username.css'

const Username = () => {

  const [username, setUsername] = useState('');

  return (
    <>
    <div className="username-container">
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

export default Username