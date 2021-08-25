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