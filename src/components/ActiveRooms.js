import React from 'react'

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
    <div>
      {console.log(rooms)}
    </div>
  )
}

export default ActiveRooms