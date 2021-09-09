import React from 'react'
import shortid from 'shortid'

import './css/ActiveRooms.css'

const ActiveRooms = (activeRooms) => {

  let rooms;

  const getActiveRooms = (activeRooms) => {
    let activeRoomsSet = new Set();

	  Object.keys(activeRooms).forEach(id => (
		  activeRoomsSet.add(activeRooms[id][1])
	  ))
	  rooms = Array.from(activeRoomsSet);
	  return rooms;
  }

  getActiveRooms(activeRooms.activeRooms);


  return (
    <div className="activeRooms-container">
      <h3 className="activeRooms-header">Chat Rooms</h3>
      <div className="activeRooms-list">
        {rooms.map(room => (
          <div className={`activeRooms-${room}`} key={shortid.generate()}>{room}</div>
        ))}

      </div>
    </div>
  )
}

export default ActiveRooms