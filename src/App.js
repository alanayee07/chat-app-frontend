import React, {useState} from 'react';
import io from 'socket.io-client';


const socket = io('http://localhost:4001');

const App = () => {

  const [message, setMessage] = useState('')

  const sendMessage = e => {
    e.preventDefault();
    console.log(message);
    socket.emit('message', {message});
    // send message on socket
    setMessage('');
  }

  return (
    <div className="App">
      <h1>Chat App</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="message"
          placeholder="Type message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App;
