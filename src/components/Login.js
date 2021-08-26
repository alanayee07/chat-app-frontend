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
          <div className="username-button">
            <button>
              Set Username
            </button>
          </div>
        </div>
        <div className="roomName-container">
          <InputField
            className="roomName-input"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder='Enter Room'
          />
          <div className="joinRoom-button">
            <Link to={`/${roomName}`} className="joinRoom-button">
              Join room
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login