import React, {useState} from 'react';

const App = () => {

  const [message, setMessage] = useState('')
  const sendMessage = e => {
    e.preventDefault();
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
      </form>
    </div>
  )
}

export default App;
