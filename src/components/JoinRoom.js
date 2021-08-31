import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const JoinRoom = ({username}) => {

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
        <Link to={`/${roomName}?username=${username}&roomName=${roomName}`}>
          <button className="joinRoom-button">Join Room</button>
        </Link>
      </div>
    </div>
  )
}


export default JoinRoom;
