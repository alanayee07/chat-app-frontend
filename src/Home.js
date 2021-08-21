import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  const [roomName, setRoomName] = useState('');


  return (
    <div className="home-container">
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

  )
}


export default Home;
