import React, {useState, useEffect} from 'react';
// import io from 'socket.io-client';


const Home = ({socket}) => {

  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    socket.on('join', (roomId) => {
      setRoomName(roomId);
    })
  })

  const joinRoom = e => {
    e.preventDefault();
    if (roomName !== "") {
      setRoomName(roomName);
      const roomObj = {
        roomName,
        userId: socket.id,
      }
      socket.emit("join", roomObj);
      // socket.emit("join", roomName);
      console.log('roomName is set to: ', roomName)
    } else {
      alert("Please enter roomname");
    }
  }


  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={e => setRoomName(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>

  )
}


export default Home;
