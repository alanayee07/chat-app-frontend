import React from 'react';
import ChatRoom from './ChatRoom'
// import io from 'socket.io-client';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from  './Home'


// const socket = io('http://localhost:7000/');

const App = () => {

  // const [roomName, setRoomName] = useState('');

  // useEffect(() => {
  //   if (roomName) {
  //     socket.on('join', roomName => {
  //       console.log('Joined ', roomName);
  //     })
  //   }
  // }, [roomName])

  // const handleRoomNameChange = e => {
  //   setRoomName(e.target.value);
  // }

  // const joinRoom = e => {
  //   e.preventDefault();
  //   const roomObj = {
  //     roomId: roomName,
  //     userId: socket.id,
  //   }
    // setRoomName(roomObj.roomId);
    // socket.emit("join", roomObj);
    // console.log('roomName is set to: ', roomName);


    // if (roomName !== "") {
    //   setRoomName(roomName);
    //   const roomObj = {
    //     roomId: roomName,
    //     userId: socket.id,
    //   }
    //   socket.emit("join", roomObj);
    //   // socket.emit("join", roomName);
    //   console.log('roomName is set to: ', roomObj.roomId)
    // } else {
    //   alert("Please enter roomname");
    // }

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
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  )
}

export default App;
