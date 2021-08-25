import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './css/JoinRoom.css'

const JoinRoom = () => {

  const [roomName, setRoomName] = useState('');

  return (
    <div className="joinRoom-container">
      <div className="roomName-input">
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        />
        <Link to={`/${roomName}`}>
          Join room
        </Link>
      </div>
    </div>
  )
}


export default JoinRoom;
