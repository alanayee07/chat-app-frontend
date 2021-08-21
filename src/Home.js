import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';


const socket = io('http://localhost:7000/');

const Home = ({socket}) => {

  const [roomName, setRoomName] = useState('');

  // const joinRoom = e => {
  //   e.preventDefault();
  //   if (roomName !== "") {
  //     setRoomName(roomName);
  //     const roomObj = {
  //       roomName,
  //       userId: socket.id,
  //     }
  //     socket.emit("join", roomObj);
  //     // socket.emit("join", roomName);
  //     console.log('roomName is set to: ', roomName)
  //   } else {
  //     alert("Please enter roomname");
  //   }
  // }


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
