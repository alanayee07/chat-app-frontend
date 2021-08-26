import React from 'react';
// import io from 'socket.io-client';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import JoinRoom from  './components/JoinRoom'
import Login from './components/Login';
import ChatRoom from './components/ChatRoom'


// const socket = io('http://localhost:7000/');

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  )
}

export default App;
