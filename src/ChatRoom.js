import React from 'react'

const ChatRoom = (props) => {
  const { roomId } = props.match.params;

  return (
    <div>
      <h1>Room: {roomId}</h1>
      <input
        type="text"
        placeholder="Type Message Here..."
      />
    </div>
  )
}

export default ChatRoom