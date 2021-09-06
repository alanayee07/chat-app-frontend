import React, {useState, useEffect} from 'react'
import SocketIo from '../socket.io.client/index.js';
import JoinRoom from './JoinRoom';
import queryString from 'query-string';
import moment from 'moment';
import OnlineUsers from './OnlineUsers'
// import {createNewMessage} from './utilities';

import './css/ChatRoom.css';


const ChatRoom = ({location}) => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  // const [users, setUsers] = useState({});


  const [onlineUsers, setOnlineUsers] = useState({});

  useEffect(() => {
    SocketIo.on('join', userMap => {
      setOnlineUsers({...onlineUsers, userMap});
    })
  }, [onlineUsers]);



  useEffect(() => {
    const {username, roomName} = queryString.parse(location.search);

    setRoomName(roomName);
    setUsername(username);

    SocketIo.emit('join', {userId: SocketIo.id, room: roomName, username: username});

  }, [location.search]);

  // useEffect(() => {
  //   SocketIo.on('join', userByRoomMap => {
  //     console.log('this is the userByRoomMap!!!!', userByRoomMap);
  //     // SocketIo.emit('message', userByRoomMap);
  //   })
  // }, []);


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
      <OnlineUsers onlineUsers={onlineUsers}/>
      <div className="message-container">
        <h5 className="room-header">Room: {roomName}</h5>
        <div className="message-list">
          {messages.map((msg, index) => {
            if (!msg.message) return null;
            else if (msg.id === SocketIo.id) return (
              <div className="msg-container-self" key={`${msg.timestamp}${index}`}>
                <div className="msg-timestamp-self">{moment(msg.timestamp).format("hh:mm")}</div>
                {/* <div className="msg-username-self">{msg.username}{':'}</div> */}
                <div className="msg-message-self">{msg.message}</div>
              </div>
            )
            else if (msg.id !== SocketIo.id && (msg.isChatbot === true)) return (
              <div className="msg-container" key={`${msg.timestamp}${index}`}>
                <div className="msg-timestamp">{moment(msg.timestamp).format("hh:mm")}</div>
                <div className="msg-message">{msg.message}</div>
              </div>
            )
            else return (
              <div className="msg-container" key={`${msg.timestamp}${index}`}>
                <div className="msg-timestamp">{moment(msg.timestamp).format("hh:mm")}</div>
                <div className="msg-username">{msg.username}{':'}</div>
                <div className="msg-message">{msg.message}</div>
              </div>
            )
          })}
        </div>
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
      <div className="new-room">
        <JoinRoom username={username} />
      </div>
    </div>
  )
}

export default ChatRoom