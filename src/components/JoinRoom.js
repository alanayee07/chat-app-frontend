import React, {useState} from 'react';
import { Link } from 'react-router-dom';


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
        <Link to={`/${roomName}`} className="joinRoom-button">
          Join room
        </Link>
      </div>
    </div>
  )
}


export default JoinRoom;
