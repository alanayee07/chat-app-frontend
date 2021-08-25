import React from 'react';
import ChatRoom from './components/ChatRoom'
// import io from 'socket.io-client';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import JoinRoom from  './components/JoinRoom'
import Username from './components/Username';


// const socket = io('http://localhost:7000/');

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Username} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  )
}

export default App;
