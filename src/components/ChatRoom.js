import React, {useState, useEffect} from 'react'
import SocketIo from '../socket.io.client/index.js';
import JoinRoom from './JoinRoom';
// import {createNewMessage} from './utilities';

const ChatRoom = (props) => {
  const { roomId } = props.match.params;

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    SocketIo.on('message', msg => {
      setMessages([...messages, msg]);
    })
  }, [messages]);

  useEffect(() => {
    SocketIo.emit('message', {userId: SocketIo.id, room: roomId})
    setMessages([]);
  }, [roomId]);


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
      <div className="message-container">
        <div className="message-list">
          {messages.map((msg, index)=> {
            return (
              <h4 key={index}>{msg.message}</h4>
            )
          })}
        </div>
      </div>
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
      <div className="new-room">
        <JoinRoom />
      </div>
    </div>
  )
}

export default ChatRoom