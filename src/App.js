import React, {useState, useEffect} from 'react';
import ChatRoom from './ChatRoom'
import io from 'socket.io-client';
// import Home from  './Home'


const socket = io('http://localhost:7000/');

const App = () => {

  const [roomName, setRoomName] = useState([]);

  useEffect(() => {
    if (roomName) {
      socket.on('join', roomName => {
        console.log('Joined ', roomName);
      })
    }
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

  // const [yourId, setYourId] = useState();
  // const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   // console.log('useEffect is working');
  //   socket.on('message', msg => {
  //     // console.log('useEffect is working', msg);
  //     setMessages([...messages, msg]);
  //   })
  // }, [message, messages])


  // const sendMessage = e => {
  //   e.preventDefault();
  //   console.log(message);
  //   const messageObj = {
  //     message,
  //     userId: socket.id,
  //     room: 'Alana-Room',
  //   }
  //   socket.emit('message', messageObj);
  //   setMessage('');

  //   // // send message on socket
  // }



  return (
    <div className="App">
      <h1>Chattr App</h1>
      <div className="roomName-container">
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={joinRoom}>Join Room</button>
      </div>
      {/* <Home socket={socket} /> */}
      <ChatRoom roomName={roomName}/>
      {/* <h1>Chat App</h1>
      <Home/>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="message"
          placeholder="Type message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((msg, index) => {
            return (
              <h3 key={index}>{msg.message}</h3>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default App;
