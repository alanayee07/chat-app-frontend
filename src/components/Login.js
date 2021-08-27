import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import InputField from './InputField';


const Login = () => {

  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');

  return (
    <>
    <div className="login-container">
      <div className="login-inner-container">
        <div className="username-container">
          <InputField
            className="username-input"
            propValue={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter Username'
          />
        </div>
        <div className="roomName-container">
          <InputField
            className="roomName-input"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder='Enter Room'
          />
          <Link to={`/${roomName}?username=${username}&roomName=${roomName}`} onClick={e => (!username || !roomName) ? e.preventDefault() : null}>
            <button className="joinRoom-button">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login