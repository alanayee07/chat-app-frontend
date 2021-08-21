import React, {useState} from 'react'
import SocketIo from './socket.io.client/index.js';

const ChatRoom = (props) => {
  const { roomId } = props.match.params;

  const [message, setMessage] = useState('');

  const sendMessage = e => {
    e.preventDefault();
    const messageObj = {
      message,
      userId: SocketIo.id,
      room: roomId,
    }
    SocketIo.emit('message', messageObj);
    setMessage('');
  }

  return (
    <div className="chatRoom-container">
      <h1>Room: {roomId}</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type Message Here..."
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