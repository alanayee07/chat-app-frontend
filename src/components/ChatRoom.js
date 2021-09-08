import React, {useState, useEffect} from 'react'
import SocketIo from '../socket.io.client/index.js';
import JoinRoom from './JoinRoom';
import queryString from 'query-string';
import moment from 'moment';
import OnlineUsers from './OnlineUsers'

import './css/ChatRoom.css';


const ChatRoom = ({location}) => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState({});

  useEffect(() => {
    SocketIo.on('join', userMap => {
      setOnlineUsers(userMap);
    })
  }, []);

  useEffect(() => {
    const {username, roomName} = queryString.parse(location.search);

    setRoomName(roomName);
    setUsername(username);

    SocketIo.emit('join', {userId: SocketIo.id, room: roomName, username: username});

  }, [location.search]);

  useEffect(() => {
    SocketIo.on('message', msg => {
      setMessages([...messages, msg]);
    })
  }, [messages]);

  useEffect(() => {
    SocketIo.emit('message', {userId: SocketIo.id, room: roomName, username: username})

    setMessages([]);
  }, [roomName, username]);


  const sendMessage = e => {
    e.preventDefault();
    const messageObj = {
      message,
      userId: SocketIo.id,
      username: username,
      room: roomName,
    }
    SocketIo.emit('message', messageObj);
    setMessage('');
  }

  return (
    <div className="chatRoom-container">
      <h5 className="room-header">Room: {roomName}</h5>
      <div className="new-room">
        <JoinRoom username={username} />
      </div>
      <div className="chatRoom-inner">
        <OnlineUsers onlineUsers={onlineUsers}/>
        <div className="message-container">
          <div className="message-list">
            {messages.map((msg, index) => {
              let chatMsgClassName = '';
              if (!msg.message) {
                return null;
              }
              if (msg.id === SocketIo.id) {
                chatMsgClassName = '-self';
              }
              return (
                <div className={`msg-container${chatMsgClassName}`} key={`${msg.timestamp}${index}`}>
                <div className={`msg-timestamp${chatMsgClassName}`}>{moment(msg.timestamp).format("hh:mm")}</div>
                {(msg.id !== SocketIo.id) && !msg.isChatBot &&  <div className={`msg-username${chatMsgClassName}`}>{msg.username}{':'}</div>}
                <div className={`msg-message${chatMsgClassName}`}>{msg.message}</div>
              </div>
              )
            })}
          </div>
          <div className="sendMessage-container">
            <div className="sendMessage-formContainer">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom