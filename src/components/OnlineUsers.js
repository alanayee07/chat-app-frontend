import React from 'react';

import './css/OnlineUsers.css'

const OnlineUsers = (onlineUsers) => {

  const usernames = [];

  const getEachOnlineUser = (onlineUsers) => {
    // console.log('this is the onlineObj', onlineUsers.onlineUsers)

    for (let user in onlineUsers.onlineUsers) {
      usernames.push(onlineUsers.onlineUsers[user]);
    }
    return usernames;
  }
  getEachOnlineUser(onlineUsers)

  return (
    <div className="onlineUsers-container">
      <div className="onlineUsers-list">
        {usernames.map((user, index) => {
          return (
            <div key={`${user}${index}`}>{user}</div>
          )
        })}
      </div>
    </div>
  )
}

export default OnlineUsers