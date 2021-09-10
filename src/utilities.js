/**
 *
 * @param {string} userName - input username
 * @param {string} userId - socket.id
 * @param {string} roomId - input roomname
 * @param {string} message
 * @returns
 */
export const createNewMessage = (userName, userId, roomId, message) => {
  return {
    userName,
    id: userId,
    timeStamp: new Date(),
    room: roomId,
    message
  }
}


// const sameChatRoomUsers = [];

// export const getSameChatRoomUsers = (activeRooms) => {
//     // console.log(activeRooms.activeRooms)
//   for (let user in activeRooms.activeRooms) {
//     if (activeRooms.activeRooms[user][1] === activeRooms.roomName) {
//       sameChatRoomUsers.push(activeRooms.activeRooms[user][0])
//     }
//   }
//   return sameChatRoomUsers;
// }


