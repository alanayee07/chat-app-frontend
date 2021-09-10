import React from 'react'
import shortid from 'shortid'

import './css/OnlineUsers.css'

const OnlineUsers = (onlineUsers) => {

  const usernames = [];

  const getEachOnlineUser = (onlineUsers) => {
    // console.log('this is the onlineObj', onlineUsers.onlineUsers)

    for (let id in onlineUsers.onlineUsers) {
      usernames.push(onlineUsers.onlineUsers[id]);
    }
    return usernames;
  }

  getEachOnlineUser(onlineUsers)

  return (
    <div className="onlineUsers-container">
      <h3 className="onlineUsers-header">Online Friends</h3>
      <div className="onlineUsers-list">
        {usernames.map((user, index) => {
          return (
            <div key={shortid.generate()}>{user}</div>
          )
        })}
      </div>
    </div>
  )
}

export default OnlineUsers