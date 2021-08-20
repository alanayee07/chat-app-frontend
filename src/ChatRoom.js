import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:7000/');

const ChatRoom = ({roomName}) => {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  // const [roomId, setRoomId] = useState('');

  useEffect(() => {
    // console.log('useEffect is working');

    // socket.on('join', (roomId) => {
    //   socket.emit('join', roomId);
    //   console.log('room ID is: ', roomId);
    //   setRoomId(roomId);
    // })

    socket.on('message', msg => {
      // console.log('useEffect is working', msg);
      setMessages([...messages, msg]);
    })
  }, [message, messages])


  const sendMessage = e => {
    e.preventDefault();
    const messageObj = {
      message,
      userId: socket.id,
      room: roomName,
    }
    socket.emit('message', messageObj);
    setMessage('');
    // // send message on socket
  }


  return (
    <div className="chatRoom-container">
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((msg, index) => {
            return (
              <h3 key={index}>{msg.message}</h3>
            )
          })}
        </div>
      </div>
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
    </div>

  )
}

export default ChatRoom

